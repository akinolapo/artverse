import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data1 from "./data1";
import data2 from "./data2";

const Faqs = () => {
  return (
    <div id='faqs' className='py-10 px-20'>
        <h2 className="text-center text-3xl font-bold">FAQs</h2>
        <div className="block md:grid grid-cols-2 gap-10">
        <Fragment>
      <Faq
        data={data1}
        styles={{
          bgColor: "transparent",
          titleTextColor: "#fff",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#F8F0E3",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "5px",
          rowContentPaddingRight: "10px",
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
          rowContentColor: "#F8F0E3",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "5px",
          rowContentPaddingRight: "10px",
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