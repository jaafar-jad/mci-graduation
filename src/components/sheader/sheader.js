import logo from './mci-logo.png';
import './sheader.css'

function sheader() {
  return (
<div>

    <div className='Header'>
    <div className="headerTitles">
    <span className="pop-outin ">MASTER'S CARE INTERNATIONAL INITIATIVE</span>
    </div>
    <img
    className='headerImg'
     src="https://th.bing.com/th/id/R.08c61ae4c76c4a2f7aa0234cc0189348?rik=Gz3m8%2bsIW72zmQ&riu=http%3a%2f%2fcrossroadswaunakee.org%2fwp-content%2fuploads%2f2016%2f01%2fgraduation-celebration-720x400.jpg&ehk=%2fCXxjg3R4xhzt5Fucd8ySsv%2fd9gkgqxebOqAO%2flyX0M%3d&risl=&pid=ImgRaw&r=0 " alt="" />
   
   

<div className="advice">
INSPIRATIONS FROM MCI STAFFS
</div> </div>


    <div className="Aapp">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thanks To The Great Teachers and Mentors We Have<hr/>
        </p>
      </header>
    </div>


    </div>
  );
}

export default sheader;
