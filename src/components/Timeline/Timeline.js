import React, { useState } from 'react'
import './timeline.css'
import Suggestions from './Suggestions'
import Post from './post/Post'
import './suggestions.css'
import Stories from './Stories/Stories'






const Timeline = () => {

  const [post, setPost] = useState(
    [
      {
        username: "__.jhon_",
        userPhoto: "https://i.pinimg.com/originals/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg",
        postImage: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/47955/286077/1455986243220_Sunrise12x9InchOil__86361.1687422116.jpg?c=2",
        caption: "Sunrise Painting!!",
        likes: "120",
        time: "1d"
      },
      {
        username: "impeter",
        userPhoto: "https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
        postImage: "https://bd.gaadicdn.com/processedimages/harley-davidson/hd-400/source/hd-40064a3b6edc4a8b.jpg?tr=w-375",
        caption: "Super bike :)",
        likes: "1,023",
        time: "6m"
      },
      {
        username: "jack_here",
        userPhoto: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
        postImage: "https://images.hindustantimes.com/img/2022/07/03/1600x900/Tom_Cruise_Top_Gun_Maverick_1656809669304_1656809705950.jpg",
        caption: "Happy bday Tom the hero",
        likes: "62,622",
        time: "22s"
      },
      {
        username: "cricket_.fan",
        userPhoto: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        postImage: "https://www.timesofsports.com/wp-content/uploads/2023/07/Virat-.png",
        caption: "One man show",
        likes: "2,78,763",
        time: "18h"
      },
      {
        username: "this_is_jack",
        userPhoto: "https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg",
        postImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Cheetah_3.jpg?VersionId=rttzhrzzgXcXwZ1tSFSxtxyl2Xnl5tqy&size=690:388",
        caption: "I have captured but still its blured!",
        likes: "572",
        time: "3w"
      },
      {
        username: "itsarjun",
        userPhoto: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        postImage: "https://img.asmedia.epimg.net/resizer/TUwJIwcA8JxeoRegi8bAExc9vK0=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/6SBAGK5OKVMZBPJEYQHRUOLHM4.jpg",
        caption: "the GOAT",
        likes: "5,62,989",
        time: "3d"
      },
      {
        username: "ram_.",
        userPhoto: "https://i.pinimg.com/564x/47/06/25/4706251f3098357d737549b0f93f55fd.jpg",
        postImage: "https://quotefancy.com/media/wallpaper/3840x2160/1627330-David-Milch-Quote-Never-believe-anything-you-think-about-yourself.jpg",
        caption: "Be motivated",
        likes: "304",
        time: "3h"
      },
      {
        username: "the_memer_",
        userPhoto: "https://1.bp.blogspot.com/-92G914OYmFs/X_62UajpusI/AAAAAAAABn0/gndITrE2iooHWGcgPkiMxuDN6YAajLiRgCLcBGAsYHQ/s16000/IMG-20210111-WA0000%2B1%2560.jpg",
        postImage: "https://englishonline.britishcouncil.org/wp-content/uploads/2021/11/image2-drake-posting-meme.jpg",
        caption: "Dark Truth :(",
        likes: "7,893",
        time: "5d"
      },
      {
        username: "samantharuthprabhuoffl☑️",
        userPhoto: "https://i.pinimg.com/280x280_RS/92/cc/c3/92ccc3514e18d4819879337a9f822d71.jpg",
        postImage: "https://media.vogue.in/wp-content/uploads/2020/10/samantha-in-a-silk-sari-f-1920x1080.jpg",
        caption: "💖💖",
        likes: "3,56,872",
        time: "12s"
      },
      {
        username: "iam_sedhu",
        userPhoto: "https://superblog.supercdn.cloud/site_cuid_clilou76g4798113tmf1lw59vru/images/instagram-man-ideas-3-1687868963182-compressed.PNG",
        postImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/FCXftwhUYAACieb_1200x768.jpeg?size=1200:675",
        caption: "Must Watch",
        likes: "205",
        time: "3w"
      },
      {
        username: "photography_life",
        userPhoto: "https://superblog.supercdn.cloud/site_cuid_clilou76g4798113tmf1lw59vru/images/instagram-man-ideas-5-1687876564551-compressed.PNG",
        postImage: "https://www.picturecorrect.com/wp-content/uploads/2018/03/5-cool-photography-hacks-in-under-60-seconds-5-e1522080128456.jpg",
        caption: "Creative Click 🌅",
        likes: "1,525",
        time: "12h"
      },
    
    ]);


    const [suggest, setSuggest] = useState(
      [
        {
          suggestPhoto : "https://w0.peakpx.com/wallpaper/68/392/HD-wallpaper-random-boy-classic-cool-he-love-night-sky-stars-story-withyou.jpg",
          suggestUserName: "_veeramai_",
          suggestDescription:"New to instagram",
        },
        {
          suggestPhoto : "https://i.pinimg.com/550x/ff/04/8c/ff048c177573e962235b4aeac68ea1ac.jpg",
          suggestUserName: "kalai_",
          suggestDescription:"New to instagram",
        },
        {
          suggestPhoto : "https://i.pinimg.com/736x/39/9f/c5/399fc5c225c9cb0021edbd1c3e1440e2.jpg",
          suggestUserName: "_m_naveen",
          suggestDescription:"New to instagram",
        },
        {
          suggestPhoto : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxZDVyvf1PbtYSdUYE01Qt3dVQrQcHkfGcJEO1sncSU11ctye43_u3wMAi1gYftbUFHc&usqp=CAU",
          suggestUserName: "_mk_raina",
          suggestDescription:"New to instagram",
        },
        {
          suggestPhoto : "https://i.pinimg.com/736x/04/0e/8f/040e8fcc62f877fcb18023f214e53316.jpg",
          suggestUserName: "im_senthil",
          suggestDescription:"New to instagram",
        },
      ])
  return (
    <div className='timeline'>
      <div className="timeline-left">
          <Stories 
          /* userPhoto={post.userPhoto}
          userName={post.username} */
          />
        {/* {post.map((post) => (
          <Statusbar 
            userPhoto={post.userPhoto}
            userName={post.username}
          />
        ))} */}
        
          
        <div className="timeline-posts">
          {post.map((post) => (
            <Post 
              userName={post.username}
              postImage={post.postImage}
              userPhoto={post.userPhoto}
              caption={post.caption}
              likes={post.likes}
              time={post.time}

            />
          ))}
          
        </div>
      </div>
      <div className="timeline-right">
        
      <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <img src="https://superblog.supercdn.cloud/site_cuid_clilou76g4798113tmf1lw59vru/images/instagram-man-ideas-3-1687868963182-compressed.PNG" alt="" className='suggest-photo' />
            </span>
            <div className="username__info">
              <span className="username">isedhu</span>
              <span className="relation">Sedhu</span>
            </div>
          </div>
          <button className="follow__button">Switch</button>
        </div>
        
      <div className="suggestions__title">Suggestions for you</div>
        {suggest.map((suggest) => (
          <Suggestions 
            suggestPhoto={suggest.suggestPhoto}
            suggestUserName={suggest.suggestUserName}
            suggestDescription={suggest.suggestDescription}
          />
        ))}
        
      </div>
    </div>
  )
}

export default Timeline