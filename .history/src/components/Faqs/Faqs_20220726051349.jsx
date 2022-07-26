import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data from "./data";

const Faqs = () => {
  return (
    <div>
        <h2 className='text-center'>FAQs</h2>
        <Fragment>
      <Faq
        data={data}
        styles={{
          bgColor: "#000",
          titleTextColor: "#fff",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "50px",
          rowContentPaddingRight: "150px",
          arrowColor: "red"
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