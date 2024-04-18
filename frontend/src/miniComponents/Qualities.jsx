import React from "react";

const Qualities = () => {
    const qualities = [
        {
          id: 1,
          image: "/community.jpg",
          title: "COMMUNITY DEVELOPMENT",
          description:
            "A donation website's commitment to community development is evident in its multifaceted approach. It not only facilitates financial contributions but also cultivates a sense of belonging and empowerment within the community. Through transparent communication, it fosters trust and accountability, ensuring donors see the tangible impact of their contributions.",
        },
        {
          id: 2,
          image: "/transparency.jpg",
          title: "TRANSPARENCY",
          description:
            "A donation website excels in transparency by providing donors with comprehensive insights into their contributions. It offers detailed breakdowns of how funds are allocated, ensuring accountability and trust. Real-time updates and progress reports showcase the impact of donations, fostering transparency and building donor confidence.",
        },
        {
          id: 3,
          image: "/impact.jpg",
          title: "IMPACT MEASUREMENT",
          description:
            "The donation website demonstrates a commitment to impact measurement through rigorous evaluation processes. It employs robust metrics and indicators to assess the effectiveness of projects funded by donations, providing stakeholders with clear insights into outcomes achieved. By collecting and analyzing data on key performance indicators, it ensures accountability and transparency while continually refining strategies to maximize positive impact.",
        },
      ];

    return (
        <>
        <div className="qualities">
          <h2>OUR QUALITIES</h2>
          <div className="container">
            {qualities.map((elememt) => {
              return (
                <div className="card" key={elememt.id}>
                  <div className="img-wrapper">
                    <img src={elememt.image} alt={elememt.title} />
                  </div>
                  <div className="content">
                    <p className="title">{elememt.title}</p>
                    <p className="description">{elememt.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}

export default Qualities;