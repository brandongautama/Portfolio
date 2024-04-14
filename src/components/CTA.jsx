import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CTA = () => {
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together
      </p>
      {/* <Link to="/contact" className="button"></Link> */}
      <div>
        <CopyToClipboard text="brandongautama15@gmail.com" onCopy={onCopyText}>
          <button className="btn">brandongautama15@gmail.com</button>
        </CopyToClipboard>
        <div className="mt-2 font-poppins">
          {copyStatus ? "Email copied!" : "Click to copy ☝️"}
        </div>
      </div>
    </section>
  );
};

export default CTA;
