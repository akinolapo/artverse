import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data1 from "./data1";
import data2 from "./data1";

const Faqs = () => {
  return (
    <div id='faqs' className='py-10 px-20'>
        <div className="grid md:grid-cols-2 md:gap-10">
        <Fragment>
      <Faq
        data={data1}
        styles={{
          bgColor: "transparent",
          titleTextColor: "#fff",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "50px",
          rowContentPaddingRight: "150px",
          arrowColor: "white"
        }}
        config={{
          animate: true
        }}
      />
    </Fragment>
        <Fragment>
      <Faq
        data={data2}
        styles={{
          bgColor: "transparent",
          titleTextColor: "#fff",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "50px",
          rowContentPaddingRight: "150px",
          arrowColor: "white"
        }}
        config={{
          animate: true
        }}
      />
    </Fragment>
    </div>
    </div>
  )
}

export default Faqs