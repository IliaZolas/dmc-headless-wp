import './card.scss';
import DOMPurify from 'dompurify';

const BlogCard = ({ key, date, title, imageUrl, text, url }) => {
    const sanitizedContent = DOMPurify.sanitize(text);
    const sanitizedTitle = DOMPurify.sanitize(title)
    const timestamp = date;
    const formattedDate = timestamp.substring(0, 10);

    return (
        <div key={key} className="blog-card">
            <div className="blog-card-img">
                <img src={imageUrl} alt="" style={{ width: "400px"}}/>
            </div>
            <div className="">
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: sanitizedTitle }}></h3>
                    <p>{formattedDate}</p>
                    <p dangerouslySetInnerHTML={{ __html: sanitizedContent }}></p>
                </div>
                <div>
                    <a href={url} className="btn-primary-blog" target='_blank' rel="noreferrer">
                    Read
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
