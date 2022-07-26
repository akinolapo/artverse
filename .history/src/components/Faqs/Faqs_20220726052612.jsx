import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data from "./data";

const Faqs = () => {
  return (
    <div id='faqs' className='py-10 px-20'>
        <Fragment>
      <Faq
        data={data}
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
        data={data}
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
  )
}

export default Faqs