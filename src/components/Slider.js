import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArrSlider } from "../untils/fn";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);

  // useEffect(() => {
  //   const sliderEls = document.getElementsByClassName("slider-item");
  //   let min = 0;
  //   let max = 2;

  //   const intervalId = setInterval(() => {
  //     console.log(1);
  //     for (let i = 0; i < sliderEls.length; i++) {
  //       if ((i <= max && i >= min) || (i <= min && i >= max)) {
  //         sliderEls[i].style.cssText = "display:none";
  //       } else {
  //         sliderEls[i].style.cssText = "display:block";
  //       }
  //     }
  //     if (min === 5) {
  //       min = 0;
  //     } else {
  //       min += 1;
  //     }
  //     if (max === 5) {
  //       max = 0;
  //     } else {
  //       max += 1;
  //     }
  //     console.log({ min, max });
  //   }, 1000);
  //   return () => {
  //     intervalId && clearInterval(intervalId);
  //   };
  // }, []);
  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let min = 0;
    let max = 2;
    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1);
      for (let i = 0; i < sliderEls.length; i++) {
        // Delete classnames (css)
        sliderEls[i]?.classList?.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        sliderEls[i]?.classList?.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderEls[i]?.classList?.remove(
          "animate-slide-left2",
          "order-2",
          "z-10"
        );

        // Hide or Show images
        if (list.some((item) => item === i)) {
          sliderEls[i].style.cssText = `display: block`;
        } else {
          sliderEls[i].style.cssText = `display: none`;
        }
      }
      // Add animation by adding classnames
      list.forEach((item) => {
        if (item === max) {
          sliderEls[item]?.classList?.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === min) {
          sliderEls[item]?.classList?.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderEls[item]?.classList?.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });
      min = min === sliderEls.length - 1 ? 0 : min + 1;
      max = max === sliderEls.length - 1 ? 0 : max + 1;
    }, 3000);
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="flex gap-4 w-full overflow-hidden px-[59px] pt-[32px]">
      {banner?.map((item) => (
        <img
          src={item.banner}
          alt=""
          className="slider-item flex-1 object-contain w-1/3 rounded-lg"
        />
      ))}
    </div>
  );
};

export default Slider;
