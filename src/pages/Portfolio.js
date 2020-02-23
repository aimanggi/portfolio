import React, { Component } from "react";
import portfolio from "../assets/data/portfolio";

class Portfolio extends Component {
  render() {
    return (
      <section className="porto">
        <div className="porto-header">
          <div className="container">PORTFOLIO</div>
        </div>
        <div className="container porto-content">
          <div className="porto-content__fluid">
            {portfolio.map((data, i) => {
              return (
                <div key={i} className="porto-content__card" >
                  {/* <div>
                    <img
                      className="porto-content__image"
                      src={data.image}
                      alt={data.name}
                    />
                  </div> */}
                  <div className="porto-content__separator">
                    <a href={data.url || '#portfolio'} className="title__content">{data.name}</a>
                    <div className="mb-2" style={{color: '#BFC0C0'}}>{data.project}</div>
                    <div>{data.summary}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;