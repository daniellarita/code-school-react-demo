import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends Component {
  constructor(){
    super();
    this.state={
      showComments:false
    };
  }

  render() {
    const comments=this._getComments();
    let commentNodes;
    if (this.state.showComments){
      commentNodes=<div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <button onClick={this._handleClick.bind(this)}>Show comments</button>
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        {commentNodes}
      </div>
    );
  }
  _handleClick(){
    this.setState({
      showComments:!this.state.showComments
    })
  }
  _getComments(){
    const commentList=[
      {id:1, author:"Danni",body:"coooool"},
      {id:2, author:"elton",body:"yo"},
      {id:3, author:"john",body:"that is great"},
      {id:4, author:"biggie",body:"sweet"}
    ];

    return commentList.map((comment)=>{
      return (
        <Comment author={comment.author} body={comment.body}/>
      )
    })
  }

  _getCommentsTitle(commentCount){
    if (commentCount===0){
      return "No comments yet"
    } else if (commentCount===1){
      return '1 comment'
    } else {
      return `${commentCount} comments`
    }
  }
};

export default CommentBox;
