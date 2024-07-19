import React from "react";
import "../css/NewsItem.css";

function NewsItem(props) {
    let { desc, title, imageURL, newsUrl} = props;

    return (
        <div className="total">
            <div className="image-card">
                <div className="image-card2">
                    <img src={imageURL} className="card-img-top" alt="..." />
                </div>
            </div>

            


            <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">{title}</div>
                <div class="notibody"><a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        Read More...
                    </a>{desc}</div>
                
            </div>
        </div>
    );
}

export default NewsItem;
