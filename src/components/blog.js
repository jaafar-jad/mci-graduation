import React from 'react';
import './Blog.css';
import axios from 'axios';

class Blog extends React.Component {

  state = {
    id: '',
    title: '',
    body: '',
    data: []
  }

  changeId = e => {
    let id = e.target.value;
    this.setState({
      id: id
    })
  }
  
  changeTitle = e => {
    let title = e.target.value;
    this.setState({
      title: title
    })
  }

  changeBody = e => {
    let body = e.target.value;
    this.setState({
      body: body
    })
  }

  editPost = (postIndex, title, body) => {
    this.setState({
      id: postIndex + 1,
      title: title,
      body: body
    })

  }

  addOrUpdatePost = e => {
    e.preventDefault();
    if(this.state.title === '' || this.state.body === '' || this.state.id === '') {
      alert('No field should be empty');
      return;
    } else if(this.state.id > this.state.data.length + 1) { 
      alert('Please use the next id');
    } else {
      if(this.state.data[this.state.id - 1] !== undefined) {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, {
          id: this.state.id ,
          title: this.state.title,
          body: this.state.body
        }).then(res => {
          let updatedData = [...this.state.data];
          updatedData[this.state.id - 1] = res.data;
          this.setState({
            id: updatedData.length + 1,
            title: '',
            body: '',
            data: updatedData
          })
          console.log(res)
        })
        .catch(err => console.log(err));
      } else {
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        id: this.state.id + 1,
        title: this.state.title,
        body: this.state.body
      })
      .then(res => {
        console.log(res);
        let newPost = res.data;
        let newData = [...this.state.data, newPost];
        this.setState({
          id: this.state.id + 1,
          title: '',
          body: '',
          data: newData
        });
      })
      .catch(err => console.log(err));
      }
    }
  }

  deletePost = postIndex => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postIndex}`)
    .then(res => {
      let newData = [...this.state.data];
      newData.splice(postIndex, 1);
      this.setState({
        id: newData.length + 1,
        title: '',
        body: '',
        data: newData
      })
      console.log(res)
    })
    .catch(err => console.log(err));
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      let newData = res.data.slice(0,5);
      this.setState({
        id: newData[newData.length - 1].id + 1,
        data: newData
      }, () => console.log(this.state.id))
      console.log(newData)
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  render() {

    return (
      <div className='ArticleContainer'>
        <div>
        <img 
className=''
src=" https://www.yankee-shelties.com/images/latestupdates.jpg "
alt="" />
        </div>
        <div className='AddArticle'>
          <b>Strictly for admin<hr/> </b>
          <input type='number' onChange={this.changeId} value={this.state.id} />
          <form>
          <input onChange={this.changeTitle} type='text' placeholder='Title' value={this.state.title} />
          <textarea onChange={this.changeBody} placeholder='Enter Body... (only admin(jaafar) can add blog...' value={this.state.body}>
          </textarea>
          <input onClick={this.addOrUpdatePost} type='submit' value='Add/Update Post'/>
          </form>
        </div>
        <div>  

        <article>
        <img 
className='postImg'
src="https://i.etsystatic.com/13694008/r/il/4c6d00/1510324378/il_570xN.1510324378_dub4.jpg "
alt="" />
          <h2> Appreciations  To The Staffs</h2>
          <span className="pppostDate">1 hour ago:by jaafar</span>
          <h4>  Thank you for giving us the best  teachings you all. It’s so enjoyable listening to you all, you make things looks  so simple. Well, this is a very emotional moment for all of us as we are getting promoted to a new life on the one hand; whereas on the other hand, we are also leaving behind our most favourite place, i.e. our school where we spent the most significant growing moment of our studies.
we would like to utilize this moment to thank all our teachers who prepared us for the world outside. Our teachers have been an epitome of strength and a great pillar of support to all of us. They have been as strict as father and as loving as a mother, equally caring like a friend, a strict disciplinarian and yet always so approachable. Our teachers are wonderful human beings because they have accepted all of us with all the weaknesses and have worked upon us to overcome those weaknesses.  </h4>
          </article>

        <article>
        <img 
className='postImg'
src=" https://scontent.fbni1-1.fna.fbcdn.net/v/t1.18169-9/26924_100961033273232_8559_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeHzLdcDBokMoymVXulQio2Rk3HoIidXYNSTcegiJ1dg1GT8x7EcIMO4otKu3uAinNSjjWyOpDe2O84vjdJa9L2S&_nc_ohc=2kVyP1P_CkUAX8Yn6u0&_nc_ht=scontent.fbni1-1.fna&oh=00_AT8wqf4RaW9ct7MqlQhieBGiyx8Nfk9aKHiGcy42L8RK2A&oe=63312056 "
alt="Mr. Sunny Luther O." />
          <h2>Founder of MCI (Mr.Sunny O. Luther)</h2>
          <span className="pppostDate">1 hour ago:by jaafar</span>
          <h4> MCI (coding ) was started by  Sunny Luther, He believes technology is a golden opportunity to make the world a more equal, fairer place for everyone, but noticed a distinct lack of diversity and backgrounds from those who were venturing on their journey to become coders. Sunny Luther set out to solve this problem by creating MCI coding school.
            
            <br/>
            We can’t find the right words to thank you  on how you have impacted Our lives for the better. You are an awesome teacher ,mentor and Father. 
            Thank you for helping us work our way through the confusion of what exactly we want to do with our lives during a confusing period as this (Asuu strike). Now, we have a goal and a path forward, but you also helped us see that it doesn’t matter when we get there but how we gets there,you always advice us to be  true to ourselves. And that is the most valuable lesson of all, Thank You Daddy.
            </h4>
          </article>

          <article>
        <img 
className='postImg'
src=" https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/254544835_584317699452749_2285702708197188032_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFn6BmFP8w3pFp8qus7sJuKHpBHZx9xL9IekEdnH3Ev0krrBhY5YnGsDZeugCrvfY-vDuahvqQrvrDZHLWUsvWf&_nc_ohc=LsW2L5r3vJYAX8mrPAt&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&oh=00_AT-G4uNMRbz2D1YeyYA_xNeCMKO_HrR1bto_BGdcan-CJw&oe=63107AF9 "
alt="Mr Eric Aggrey" />
          <h2> MCI Staff (Mr.Eric Aggrey)</h2>
          <span className="pppostDate">1 hour ago:by jaafar</span>
          <h4>  
          Dear Sir Eric Aggrey, we will forever remember you as our favorite teacher for all the great things you have taught us and the patience and flexibility you’ve shown us when we we're  struggling. Thank you for always being there for us when we needed it. You are the best,
           see eh' Mr.Eric is such a great teacher with visions,missons and commitments,he has really done more than alot for us ,may God continue to bless you sir .<br/>
          lol,  I can’t remember how many times you pushed us, made us sleep late, and wake up very early, but now I know the reason why. Thank you,Mr. Eric! </h4>
          </article>

          <article>
        <img 
className='postImg'
src="https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/302215963_154894717157423_8865712965537277675_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGkuUZ2J756UfXFD6wXe7m40DjoA-gfN8jQOOgD6B83yFNhmRyJ49JxZ4M5TmW_BsDA7SdcwrPXho7yzOjfE0pk&_nc_ohc=2wdgwRk2QmQAX9HWfpG&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&oh=00_AT9v2f-NCXT_H5HZoxnIVE6-y_kSolxp2w3v_h2calqoxg&oe=630FD904 "
alt="Mr. Ubong Ntekim" />
          <h2> MCI Staff (Mr.Ubong Ntekim)</h2>
          <span className="pppostDate">1 hour ago:by jaafar</span>
          <h4>  
         Dear Sir Ubong Ntekim we are so grateful to have had you as a teacher this year. Without you and your colleagues supports, assistance, and encouragement, I know there was a big chance we would have lost our ways and thrown in the towel. Now, we are looking forward to  what the future might bring. Thank you for all you have done for us.
         Mr ubong what a great teacher you are ,how in this world can we forget you 'Never!,Your teachings were always straight to the point. Thank you for simplifying your teachings and making us understand. 
Thank you for passing on the knowledge the best you could.
Thank you for opening our eyes, you made us see that we can always achieve anything we want if we put our hearts and focus on it.  '  </h4>
          </article>




          <article>
        <img 
className='postImg'
src="https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/271647066_4702420489848012_5576922009089454983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGmXII1EmB3pwE12ulsiwVCfxytIxMGtft_HK0jEwa1-9uMrUAo9bV9tdwBJEB0psVJKnNATyNaLHaECl-tZGj6&_nc_ohc=mh775s44Xf8AX9shUCf&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&oh=00_AT9s8e651vNOF3dE0MMzIQ8jyNTI5WUFTUVk7w8LdME-sQ&oe=631073FC "
alt=" mr.williams perdo" />
          <h2> MCI Staff (Mr.Williams Pedro)</h2>
          <span className="pppostDate">1 hour ago:by jaafar</span>
          <h4>  
         Dear Sir Williams Pedro could you believe that the little moment we shared with you felt like forever? its so interesting how you tend to struggle to the current stage you are right now , your motivations alone can move mountains ,God bless you for sharing your experience with us , Years from now, when we  look back on our school days, we will certainly remember you fondly, but even more, we  will always appreciate and respect all you have done for us. You have taught us many interesting and useful things from the little time we shared , we can’t thank you enough all we are saying is may God bless you Abundantly.
           </h4>
          </article>




  <article>
          <img 
className='postImg'
src="https://scontent.fbni1-1.fna.fbcdn.net/v/t39.30808-6/218065269_1165438327286798_4683411708936579345_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHOzSbOGWcao_H58GJFd4ASmsudsCB_zFmay52wIH_MWZCXXNW1-Xl-l_QJJA3Vaw_eeAQNpu2FfB-3BX8RU08n&_nc_ohc=CgWGFVTo-UwAX-7CPQ0&_nc_ht=scontent.fbni1-1.fna&oh=00_AT9E7mHPgOHBq-eU7JJ7MUwfUFHopNEags3mhQR98noCmg&oe=6310B95D "
alt="" />
          <h2>jafar adams dazhi</h2>
          <span className="pppostDate">1 hour ago:by jaafar</span>
          <h4> I still remember I joined this school on february 2022 when  Asuu started their strike,i would say its only  the love from God that got me in contact with this great leaders ,they are so so good in what they do ,to wrap it all they are a great definition of leaders
  They never left any stone unturned to change my personality and attitude. Needless to say, they have worked on me, even more,
  to prepare me for the outside world. A teacher is essentially a mentor and a role model for the student. The student believes in the    teachers and every word they say. They are noble and selfless people because they accept each of their students wholeheartedly without and bias and favouritism.
 My parents always say, that school period is the golden period in everyone’s life and I realize it now when 
I stand amidst all my favourite teachers and fellow friends to bid goodbye for a newer world.
I would especially take out some moment from this event to thank SIR SUNNY ,SIR UBONG ,SIR PEDRO and SIR ERIC  for being my guide always
 and showing me the right direction and path to walk on. It was more difficult for me than the other students to 
 accomplish the projects and tasks you assigned to us. You all have spent extra hours and shown special care to me
  in order to prepare me for the ‘real world’. I still </h4>
          </article>
        </div>
       {/* {
          this.state.data.length === 0 ?
            <p>Loading Posts...</p>
          :
            this.state.data.map((post, index) => (
              <article key={index}>
                <h2>{index + 1}. {post.title}</h2>
                <h6>{post.body.substr(0, 100)}...</h6>
                <button onClick={() => this.deletePost(index)} className='delete'>Delete</button>
                <button onClick={() => this.editPost(index, post.title, post.body)} className='edit'>Edit</button>
            </article> 
              
            ))
        }*/}   
      </div>
    )
  }
  
}

export default Blog;