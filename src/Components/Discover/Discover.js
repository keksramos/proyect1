import React, {useState} from "react";
import "./discover.scss";

export const Discover = () => {

    // const [discoverWidth, setDiscoverWidth] = useState(false)
    // const [discoverTop, setDiscoverTop] = useState(flase)

    // useEffect(()=> {
    //     const trending = document.querySelector(".TrendingPosts").getBoundingClientRect()
    //     setDiscoverWidth(trending.width)
    //     setDiscoverTop(trending.top)
    // },[])

    // useEffect(()=>{
    //     if (!set)
    //     if (window.srollY >=800){
    //         setDiscover(true)
    //     } else {
    //         setDiscover(false)
    //     }

    // window.addEventListener("scroll", isSticky)

    // })

    // const isSticky = (e) => {
    //     const discover = document.querySelector(".discoverContainer")
    //     const scrollTop = window.scrollY

    // }

  return (
    <section>
      <div className="discoverContainer">
        <p className="DiscoverTitle">Discover more of what matters to you</p>
        <div className="discoverButtonsContainer">
          <button className="discoverButtons">Programming</button>
          <button className="discoverButtons">Data Science</button>
          <button className="discoverButtons">Technology</button>
          <button className="discoverButtons">Self Improvement</button>
          <button className="discoverButtons">Writing</button>
          <button className="discoverButtons">Relationships</button>
          <button className="discoverButtons">Machine Learning</button>
          <button className="discoverButtons">Productivity</button>
          <button className="discoverButtons">Politics</button>
        </div>
        <p className="moreTopicsDiscover">See more topics</p>
      </div>
      <div>
        <ul className="footerContianer">
          <li className="footer">Help</li>
          <li className="footer">Status</li>
          <li className="footer">About</li>
          <li className="footer">Careers</li>
          <li className="footer">Blog</li>
          <li className="footer">Privacy</li>
          <li className="footer">Terms</li>
          <li className="footer">Text to speech</li>
          <li className="footer">Teams</li>
        </ul>
      </div>
    </section>
  );
};
