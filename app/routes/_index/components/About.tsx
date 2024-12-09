import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <p className={`text-base font-light ${isExpanded ? '' : 'line-clamp-5'}`}>
        The villa Sir Nick Built with classic traditional architecture, this villa blends perfectly
        with the surroundings. You will enjoy your stay and your complete privacy in the 250 square
        meters of the two-level detached house. In the garden of 450 square meters, you will enjoy
        your drink under the natural shade of the trees, the summer sun in the specially designed
        area with sunbeds, as well as endless hours of fun and joy in the outdoor pool.
        <br />
        <br />
        The house is located in the center of the small picturesque village. It is the cape of
        Thermaikos gulf.
        <br />
        <br />
        The villa Sir Nick consisting of two living rooms, five rooms all with air conditioning (one
        of them spa), three bathrooms and an independent kitchen.
        <br />
        <br />
        In the garden of 450 square meters, you will enjoy your drink under the natural shade of the
        trees, the summer sun in the specially designed area with sunbeds, as well as endless hours
        of fun and joy in the outdoor pool.
        <br />
        <br /> At a distance of 17 kilometers from the airport of Thessaloniki and just 35 minutes
        from its center, your stay will be able to be combined with the absolute quiet of the
        village but at the same time with many options for entertainment and entertainment in the
        nearby villages or in the amazing sights of the city.
        <br />
        <br />
        At a very close distance is the beautiful Halkidiki with its exotic beaches and emerald
        waters.
      </p>
      {!isExpanded && (
        <button
          className="text-violet-600 text-base mt-3 underline"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default About;
