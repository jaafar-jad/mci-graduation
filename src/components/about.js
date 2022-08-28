import React from 'react'
import'./about.css';



export default function about() {
    return (
        <div className='sidebar'>
    <div className="sidebarItem">
        <span className="sidebarrTitle"></span>
        <img 
        className='sidebarImg'
        src="https://www.bing.com/th?id=OIP.tueggIDE0HiKBikgq2_J-QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2 " alt="pic" />
          <div className='write'>
        <img 
        className='writeImg'
        src="https://th.bing.com/th/id/R.b1f07b8060812ae0202585f6d5b4d474?rik=tiiMvIRNyLoRVg&riu=http%3a%2f%2fsermonspiceuploads.s3.amazonaws.com%2f2784%2ffp_66700%2f21e16ed5_full.jpg&ehk=DRX%2bGNXoe1QJuf4qtdIilADjpjikOE1RmucuUnwiesk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1 "
         alt="" />
        </div>
         <h3> MCl: Who we are. </h3>
        <p>
              Master's care international initiative(MCI) is a programming learning centre that teaches willing individuals how to code and mastercoding to its full potential. 
Programming has become a very important part of our society because of the digital revolution, and many people still couldn’t code the very basics on a computer. mci helps those who want to learn programming and how to be a master web developer.

        </p>
        <h3> MCl: Why chose us?  </h3>
        <p>Mci offers a variety of courses that cater to the fundamentals of programming. The best software engineers and programmers started somewhere, and this is your building blocks to succeed in the tech industry.
mci also has the best experts to teach you how to do programming, from utilizing the basic tools, down to using React. Get to know them and ask as many questions as you want to better understand the language of the computer.  </p>
      
<h3>Mission </h3>
<p>MCI’s mission is to provide quality coding education services to aspiring programmers who pursue digital careers in an expanding tech market. We see to it that the quality of teaching our experts provide is the best for your learning experience.
Our aim is to also open you to a world of possibilities and push you to innovate the industry so it can further help people with their needs in life in the future of software and technology.</p>

<h3>Vision </h3>
<p>
MCI’s vision is to inspire many people, young and old, to pursue their dreams in programming sophisticated and excellent software. It’s important that kids in this new generation should know the basics of programming like learning their first language.
Because programming is a language, our educators will try their best to let you learn the computer’s main input like learning a language class in school. We sought to develop a curriculum that speeds the learning and make it enjoyable at the same time.  
</p>

<h3>Core Values</h3>
<p>Pursuit of excellence
The tech space needs quality engineers and developers to provide amazing software for users to enjoy at their convenience and experience. 
  <br/> :Innovation"
Without innovation, the world won’t be like it is today.mci always aims to teach students to innovate and go beyond the norm of how they go about their programming tasks. 
"Diligence:
Programming requires a lot of dedication and focus to achieve the difficult tasks set in the programming space. It’s difficult already with diligence, so having this trait is integral to creating the best software. 
:Perseverance:
To persevere as a programmer will lead you to great opportunities in creating something unique and memorable. Perseverance is the ability to continue despite countless failures. 
As a programmer, expect to fail multiple times until you perfect your craft. The attitude of getting back up and trying again is what sets you apart from those who give up easily. </p>



    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">COURSES WE OFFER</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Html</li>
            <li className="sidebarListItem">Css</li>
            <li className="sidebarListItem">Javascript</li>
            <li className="sidebarListItem">React.j</li>
            <li className="sidebarListItem">Next.js</li>
            <li className="sidebarListItem">Bootstrap</li>
        </ul>
        <span className="sidebarTitle">COURSES ATTARCHED</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Firebase</li>
            <li className="sidebarListItem">Github</li>
            <li className="sidebarListItem"> MongoDB</li>
            <li className="sidebarListItem">Graphql</li>
            <li className="sidebarListItem">VScode</li>
            <li className="sidebarListItem">Etc</li>
        </ul>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
    <i className="sidebarIcon   fa-brands fa-square-twitter"></i>
    <i className="sidebarIcon  fa-brands fa-pinterest"></i>
    <i className="sidebarIcon  fa-brands fa-square-instagram"></i>
        </div>
    </div>
  <hr/>


    </div>
    )
}