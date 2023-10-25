import React from "react";

const NewsCard = ({article}) => {
    // console.log(article)
// function dateTime (dateString) { 
//     const dateObject = new Date(dateString);
//     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
//     const formattedDate = dateObject.toLocaleDateString(undefined, options);
//   return formattedDate
//  }
// function dateTime(dateString) {
//     const dateObject = new Date(dateString);
//     const options = {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     };
//     const formattedDate = dateObject.toLocaleDateString(undefined, options);
//     return formattedDate;
// }
function dateTime(dateString) {
    const dateObject = new Date(dateString);
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return dateObject.toLocaleDateString(undefined, options);
}
  return (
    <>
     
        <div className="card">
          <div className="card__header">
            <img
              src={article.urlToImage || "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"}
              alt="card__image"
              className="card__image"
              width={600}
              height={200}
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">{(article?.source?.name || "none")}</span>
            <h5>{article.title}</h5>
            <div dangerouslySetInnerHTML={{__html: article.content}} />
            <a href={article.url} target="_blank">read more</a>
            {/* <p >
             {article.content}
            </p> */}
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>{article.author}</h5>
                {/* <small>{new Date(article.publishedAt?.toLocaleDateString())}</small> */}
                {/* <small> { dateTime(article?.publishedAt)}</small> */}
                <div dangerouslySetInnerHTML={{__html:dateTime(article?.publishedAt)}} /> 
                   
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card">
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?food"
              alt="card__image"
              className="card__image"
              width={600}
            />
          </div>
          <div className="card__body">
            <span className="tag tag-brown">Food</span>
            <h4>Delicious Food</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>Jony Doe</h5>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?car,automobile"
              alt="card__image"
              className="card__image"
              width={600}
            />
          </div>
          <div className="card__body">
            <span className="tag tag-red">Automobile</span>
            <h4>Race to your heart content</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>John Doe</h5>
                <small>2d ago</small>
              </div>
            </div>
          </div>
        </div> */}
     
    </>
  );
};

export default NewsCard;
