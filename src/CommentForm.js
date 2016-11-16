import React, { Component } from 'react';

class CommentForm extends Component {
  render(){
    return (
    <form className="comment-form">
      <label>Join the Discussion</label>
      <div className="comment-form-fields">
        <input placeholder="Name:"/>
        <textarea placeholder="Coment:"></textarea>
      </div>
      <div className="comment-form-actions">
        <button type="submit">
          Post comment-form
        </button>
      </div>
    </form>
    )
  }

  _handleSubmit(event){
    event.preventDefault();
  }
};

export default CommentForm;
