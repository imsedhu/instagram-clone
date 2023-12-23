import React, { useState } from 'react'
import './post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { FaHeart } from 'react-icons/fa';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const Post = ({userName, postImage, likes, time, caption, userPhoto}) => {

  const [showEmoji, setShowEmoji] = useState(false);

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setComment(comment + emoji);
  }

  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState(653);
  

  const handleLikeClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }

  const [commentIsLike, setCommentIsLike] = useState(false);
  const [commentLike, setCommentLike] = useState(0);
  

  const handleCommentLikeClick = () => {
    setCommentLike(commentLike + (commentIsLike ? -1 : 1));
    setCommentIsLike(!commentIsLike);
  }

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [showPostButton, setShowPostButton] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);
  const [editedComment, setEditedComment] = useState('');
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setShowPostButton(!!event.target.value.trim());
  };

  const handlePostComment = () => {
    if (selectedCommentIndex !== null) {
      // Update existing comment
      const updatedComments = [...comments];
      updatedComments[selectedCommentIndex] = editedComment;
      setComments(updatedComments);
      setSelectedCommentIndex(null);
      setEditedComment('');
      setShowEditBox(false);
    } else {
      // Add new comment
      setComments([...comments, comment]);
      setComment('');
      setShowPostButton(false);
    }
  };

  const handleEditComment = (index) => {
    setEditedComment(comments[index]);
    setSelectedCommentIndex(index);
    setShowEditBox(true);
  };

  const handleUpdateComment = () => {
    if (editedComment.trim() !== '') {
      handlePostComment();
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };
  return (
    <div className='post'>
      
      <div className="post-header">
        <div className="post-user">
          <img src={userPhoto} alt="" className='post-user-img'/>
          <p>{userName}<span> • {time}</span></p>
        </div>
        <MoreHorizIcon className='moreicon' />
      </div>
      <div className="post-img">
        <img src={postImage} alt="" />
      </div>

      <div className="post-footer">
        <div className="footer-icons">
          <div className="footer-main-icons">
            <FaHeart
            className='main-icon'
            onClick={handleLikeClick}
            style={{ color: isLike ? 'red' : 'white' }}
            /* className={"" + (isLike ? "text-danger" : "")} */
            />
            <ChatBubbleOutlineIcon className='main-icon'/>
            <TelegramIcon className='main-icon'/>
          </div>
          <div className="footer-save-icon">
            <BookmarkBorderIcon className='saveicon'/>
          </div>
        </div>
        <div className="post-likes">
          <p>{like} likes</p>
        </div>
        <div className="post-caption">
          <p>{userName} <span>{caption}</span></p>
        </div>
        {/* comment section */}
        <div className="comments-container">
        {comments.map((c, index) => (
          <div key={index} className="comment-item">
            <p>{c}</p>
            <div className="comment-icons-container">
              {/* <span className="heart-icon">❤️</span> */}

              <div className="like-count">
              <FaHeart
            className='like-heart-icon'
            onClick={handleCommentLikeClick}
            style={{ color: commentIsLike ? 'red' : 'white' }}
            /* className={"" + (isLike ? "text-danger" : "")} */
            />
            <span>{commentLike}</span>
              </div>
              
              {/* <span
                className="three-dots-icon"
                onClick={() => setShowEditBox(showEditBox ? false : true)}
              >
                ...
              </span> */}
              {showEditBox && selectedCommentIndex === index && (
                <div className="edit-options-popup">
                  <span onClick={() => handleEditComment(index)}>Edit</span>
                  <span onClick={() => handleDeleteComment(index)}>Delete</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {showEditBox && (
        <div className="edit-box-container">
          {/* <textarea
            placeholder="Edit your comment..."
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          /> */}
          <button onClick={handleUpdateComment}>Update</button>
          <button onClick={handleDeleteComment}>Delete</button>
        </div>
      )}

        <div className="comment-container">
          <input 
          type="text" 
          name="comment" 
          id="comment" 
          placeholder='Add your comment...' 
          className='comment-box' 
          value={showEditBox ? editedComment : comment}
          onChange={(e) => (showEditBox ? setEditedComment(e.target.value) : handleCommentChange(e))}
          />
          {showPostButton && <button onClick={handlePostComment} className='post-btn'>Post</button>}
          <SentimentSatisfiedAltIcon 
          className='emoji-icon'
          onClick={() => setShowEmoji(!showEmoji)}
          />

        {showEmoji && <div className="emoji-mart">
        <Picker 
        data={data} 
        onEmojiSelect={addEmoji}
        emojiSize={25}
        emojiButtonSize={50}
        perLine={7}
        />
        </div>}
        </div>
      </div>
    </div>
  )
}

export default Post