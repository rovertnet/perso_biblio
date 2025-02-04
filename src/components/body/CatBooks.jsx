import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export default function CatBooks() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <div id="example" className="block px-8 md:px-14 py-6 bg-[#f7f4f4]">
        <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul ref={ref}>
          <li style={{ background: "#ff0088" }}></li>
          <li style={{ background: "#dd00ee" }}></li>
          <li style={{ background: "#9911ff" }}></li>
          <li style={{ background: "#0d63f8" }}></li>
          <li style={{ background: "#0cdcf7" }}></li>
          <li style={{ background: "#4ff0b7" }}></li>
        </ul>
        <StyleSheet />
      </div>
    </>
  );
}

function StyleSheet() {
  return (
    <style>
      {`
            #example {
              width: 100vw;
              max-width: 400px;
              position: relative;
            }

            #example #progress {
                position: absolute;
                top: -65px;
                left: -15px;
                transform: rotate(-90deg);
            }

            #example .bg {
                stroke: var(--layer);
            }

            #example #progress circle {
                stroke-dashoffset: 0;
                stroke-width: 10%;
                fill: none;
            }

            #progress .indicator {
                stroke: var(--accent);
            }

            #example ul {
                display: flex;
                list-style: none;
                height: 220px;
                overflow-x: scroll;
                padding: 20px 0;
                flex: 0 0 600px;
                margin: 0 auto;
                gap: 20px;
            }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #example li {
                flex: 0 0 200px;
                background: var(--accent);
            }

    `}
    </style>
  );
}
