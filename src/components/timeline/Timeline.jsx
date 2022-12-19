import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Timeline.css"
import axios from "axios"
import { AuthContext } from "../../state/AuthContext"


export default function Timeline({ username }) {
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = username ? await axios.get(`/posts/profile/${username}`) : await axios.get(`/posts/timeline/${user._id}`);
            console.log(response);
            console.log(response.data)
            let newData = [...response.data].sort((a, b) => {
                return (a.createdAt < b.createdAt ? 1 : -1);
            })
            console.log(newData)
            setPosts(newData);
        };
        fetchPosts();
    }, [username, user._id]);
    return (
        <div className="timeline">
            <div className="timelineWrapper">
                <Share />
                {console.log(posts)}
                {posts.map((post) => (
                    <Post post={post} key={post._id} />
                ))}
            </div>
        </div>
    )
}
