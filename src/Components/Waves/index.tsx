import React from "react";
import "../../Assets/styles/wavesCss.css";
import styled from "styled-components";

const WaveWrapperInner = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
`;

const Waves = () => {
  return (
    <div className="waveWrapper waveAnimation">
      <WaveWrapperInner className="bgTop">
        <div
          className="wave waveTop"
          style={{
            backgroundImage:
              "url(http://front-end-noobs.com/jecko/img/wave-top.png)",
          }}
        ></div>
      </WaveWrapperInner>
      <WaveWrapperInner className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage:
              "url(http://front-end-noobs.com/jecko/img/wave-mid.png)",
          }}
        ></div>
      </WaveWrapperInner>
      <WaveWrapperInner className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage:
              "url(http://front-end-noobs.com/jecko/img/wave-bot.png)",
          }}
        ></div>
      </WaveWrapperInner>
    </div>
  );
};

export default Waves;
