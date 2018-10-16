import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'

class PostsShow extends Component {
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

export default connect(mapStateToProps, {fetchPost: fetchPost})(PostsShow);