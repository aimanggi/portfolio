import React, { Component } from "react";
import portfolio from "../assets/data/portfolio";

class Portfolio extends Component {
  render() {
    return (
      <section className="porto">
        <div className="porto-header">
          <div className="container">
            <div>PORTFOLIO</div>
            <div className="subtitle">Web Development</div>
          </div>
        </div>
        <div className="container porto-content">
          <div className="porto-content__fluid">
            {portfolio.web.map((data, i) => {
              return (
                <div key={i} className="porto-content__card">
                  {/* <div>
                    <img
                      className="porto-content__image"
                      src={data.image}
                      alt={data.name}
                    />
                  </div> */}
                  <div className="porto-content__separator">
                    <div>
                      <img
                        className="porto-content__image"
                        src={data.image}
                        alt={data.name}
                      />
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data.url || "#portfolio"}
                      className="title__content"
                    >
                      {data.name}
                    </a>
                    <div className="mb-2" style={{ color: "#BFC0C0" }}>
                      {data.project}
                    </div>
                    <div>{data.summary}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="porto-header">
          <div className="container">
            <div>PORTFOLIO</div>
            <div className="subtitle">UX Design</div>
          </div>
        </div>
        <div className="container porto-content">
          <div className="porto-content__fluid">
            {portfolio.design.map((data, i) => {
              return (
                <div key={i} className="porto-content__card">
                  {/* <div>
                    <img
                      className="porto-content__image"
                      src={data.image}
                      alt={data.name}
                    />
                  </div> */}
                  <div className="porto-content__separator">
                    <div>
                      <img
                        className="porto-content__image"
                        src={data.image}
                        alt={data.name}
                      />
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data.url || "#portfolio"}
                      className="title__content"
                    >
                      {data.name}
                    </a>
                    <div className="mb-2" style={{ color: "#BFC0C0" }}>
                      {data.project}
                    </div>
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
