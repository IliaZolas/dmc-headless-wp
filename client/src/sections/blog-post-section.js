import './blog-post-section.scss';
import BlogCard from '../components/card-blogpost';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BlogpostSection =  () => {
    const [blogpost, setBlogpost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://the-dmc.iliazolas.com/wp-json/wp/v2/posts');
                setBlogpost(response.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, []);


    return (
        <div className="blog-section">
            <div className="blog-title">
                <h1>Blogposts</h1>
            </div>
            <div className="blog-card-section">
                {blogpost.map((post) =>(
                <BlogCard 
                    key={post.id}
                    date={post.date}
                    title={post.title.rendered}
                    text={post.excerpt.rendered}
                    url={post.link}
                    imageUrl={post.yoast_head_json.og_image[0].url}
                />
                ))}
            </div>
        </div>
    );
}

export default BlogpostSection;