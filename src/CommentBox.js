import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  constructor(){
    super();
    this.state={
      showComments:false,
      comments:[
      {id:1, author:"Danni",body:"coooool"},
      {id:2, author:"elton",body:"yo"},
      {id:3, author:"john",body:"that is great"},
      {id:4, author:"biggie",body:"sweet"}
      ]
    };
  }

  render() {
    const comments=this._getComments();
    let commentNodes;
    let buttonText='Show comments';

    if (this.state.showComments){
      commentNodes=<div className="comment-list">{comments}</div>;
      buttonText='Hide comments';
    }

    return (
      <div className="comment-box">
        <div CommentForm addComment={this._addComment.bind(this)}/>
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        <h3>Comments</h3>
        <h4 className="comment-count">{this.state.comments.length} Comments</h4>
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

    return this.state.comments.map((comment)=>{
      return (
          <Comment 
        author={comment.author}
        body={comment.body}
        key={comment.id}/>

        )
    })
  }

  _getCommentsTitle(commentCount){
    if (commentCount===0){
      return "No comments yet";
    } else if (commentCount===1){
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }

  _addComment(author,body){
    const comment={
      id:this.state.comments.length+1,
      author,
      body,
    }
    this.setState({comments:this.state.comments.concat([comment])})
  }

  // _fetchComments(){
  //   jQuery.ajax({
  //     method:'GET',
  //     url:'/api/comments',
  //     success:(comments)=>{
  //       this.setState({comments})
  //     }
  //   })
  // }
};

export default CommentBox;
