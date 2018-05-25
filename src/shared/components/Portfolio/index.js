import React from 'react';

/* variable are not correctly translated */
// if (process.env.WEBPACK) require('./portfolio.pcss');

const Portfolio = () => (
  <div className="portfolio">
    <h2>Portfolio</h2>
    <div>
      <nav>
        <ul>
          <li>
            <a href="#" data-filter="*" class="active">All</a>
            <a href="#" data-filter=".filter-indoors">Indoors</a>
            <a href="#" data-filter=".filter-outdoors">Ooutdoors</a>
            <a href="#" data-filter=".filter-models">Models</a>
            <a href="#" data-filter=".filter-portraits">Portraits</a>
            <a href="#" data-filter=".filter-fashion">Fashion</a>
            <a href="#" data-filter=".filter-wildlife">WildLife</a>
            <a href="#" data-filter=".filter-food">Food</a>
            <a href="#" data-filter=".filter-landscape">Landscaps</a>
          </li>
        </ul>
      </nav>
    </div>{/* #isotope options */}

    <div className="image_block_listing">
      <div className="image_block">
        <div className="image_block_overlay">
          one
        </div>
      </div>

      <div className="image_block">
        <div className="image_block_overlay">
          two
        </div>
      </div>{/* #isotope image blocks */}
    </div>
  </div>
);

export default Portfolio;
