import React from 'react'
import Comment from "./comment-user.png";
import Time from './time.png'

const Comments = () => {
  return (
<>
<div className="container comments">
        <div className="comment-head">
          <p style={{ fontSize: "22px" }}>Comments</p>
          <p className="totalComments">3</p>
        </div>
        <div className="users-comment">
          <div className="user-1">
            <img src={Comment} alt="" className="img1" />
            <div className="user-data">
              <div className="user-name">Chandan Sahu
              <div className="time">
                <img className="imgtime" src={Time} alt="" />
                <div className="time-text">6 hours ago</div>
              </div>
              </div>
              <div className="UserComment">Wow, I just watched this film and I have to say it was incredible! The storytelling was so well-crafted, with complex characters and thought-provoking themes that kept me engaged from start to finish.</div>
            </div>
          </div>
        </div>
        <div className="users-comment">
          <div className="user-1">
            <img src={Comment} alt="" className="img1" />
            <div className="user-data">
              <div className="user-name">Sanket Dewangan
              <div className="time">
                <img className="imgtime" src={Time} alt="" />
                <div className="time-text">1 day ago</div>
              </div>
              </div>
              <div className="UserComment">This film is a masterpiece! The writing and directing were phenomenal, and the performances were outstanding. It was a thought-provoking and emotionally resonant exploration of its central themes that left me thinking about it long after it was over.</div>
            </div>
          </div>
        </div>
        <div className="users-comment">
          <div className="user-1">
            <img src={Comment} alt="" className="img1" />
            <div className="user-data">
              <div className="user-name">Ranjeet Singh
              <div className="time">
                <img className="imgtime" src={Time} alt="" />
                <div className="time-text">3 days ago</div>
              </div>
              </div>
              <div className="UserComment">I can't say enough good things about this movie. It was thought-provoking, beautifully crafted, and deeply affecting. It's the kind of film that stays with you long after you've watched it, and I can't wait to see it again.</div>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Comments