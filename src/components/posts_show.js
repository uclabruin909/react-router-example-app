import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    onDeleteClick() {
        const postId = this.props.match.params.id;
        this.props.deletePost(postId, ()=> {
            this.props.history.push('/');
        });
    }
    componentDidMount() {
        //provided by react-router
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId);
    }
    render() {
        const post = this.props.post;
        if (!post) {
            return (
                <div>Loading....</div>
            );
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {fetchPost: fetchPost, deletePost: deletePost})(PostsShow);