import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import Lottie from "lottie-web";
const Banner = () => {
    const [seeMore, setMoreDetails] = useState()
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../library.json"),
      rendererSettings: {
        context: container, // the canvas context
        scaleMode: "noScale",
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
      },
    });
  }, []);
  return (
    <div className="BannerSections">
      <div className="container">
        <div className="row BannerSection">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="BannerText">
              <h5>এটি একটি মসজিদ ভিত্তিক ইসলামিক পাঠাগার</h5>
              <h1>ফজুর পাড়া জামে মসজিদ পাঠাগার</h1>
              { seeMore ? <p>ছদাহা ফজুর পাড়া কেন্দ্রীয় জামে মসজিদ পাঠাগার (প্রস্তাবিত নাম)। এটি একটি মসজিদ ভিত্তিক ইসলামিক পাঠাগার। ২০২২ সালে এই লাইব্রেরি আনুষ্ঠানিকভাবে উদ্বোধন করা হয়। ছদাহার মানচিত্রে মধ্যবর্তী এলাকা আরাকান সড়ক থেকে ৩ মিনিটের দূরত্বে এই লাইব্রেরির অবস্থান। বিশিষ্ট কর্পোরেট ব্যক্তিত্ব বইপ্রেমী মুহাম্মদ নাসির উদ্দিন এই পাঠাগারের উদ্যোক্তা। এই পাঠাগারে রয়েছে কোরআন ও হাদিসের তাফসীর, হযরত মুহাম্মদ সাঃ সহ নবী ও সাহাবীদের জীবনী, মাসয়ালা-মাসায়েল, ইসলামের জ্ঞান বিজ্ঞান, ইসলামের ইতিহাস, ইসলামী সাহিত্য, ইসলামী আইন ও সমাজ, ইসলামী শিক্ষা ও দর্শন সহ ইসলামের মৌলিক বিষয় ও গ্রন্থ সমূহের বিপুল বই। ইসলামী সাহিত্য, আদর্শ, মূল্যবোধ, ধর্মীয় জ্ঞান-বিজ্ঞান চর্চা ও অনুসন্ধানে এবং শান্তিময় আদর্শ সমাজ গঠনে এই পাঠাগার গুরুত্বপূর্ণ ভূমিকা রাখবে।</p> : <p>
                ছদাহা ফজুর পাড়া কেন্দ্রীয় জামে মসজিদ পাঠাগার (প্রস্তাবিত নাম)। এটি একটি মসজিদ ভিত্তিক ইসলামিক পাঠাগার। ২০২২ সালে এই লাইব্রেরি আনুষ্ঠানিকভাবে উদ্বোধন করা হয়........। 
                
                </p>
                
              }
              <button onClick={()=> setMoreDetails(!seeMore)} >আরও পড়ুন</button>
             
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div
              className=" object-contain h-72 sm:h-80 lg:h-96  2xl:h-128 LottieFiles"
              ref={container}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
