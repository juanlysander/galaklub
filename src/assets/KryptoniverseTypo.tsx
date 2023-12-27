import React from "react";

interface KryptoniverseTypoProps {
  classNames: string;
  width: number;
}

const KryptoniverseTypo: React.FC<KryptoniverseTypoProps> = ({ classNames, width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={width}
        viewBox="0 0 7000 1000"
      >
        <title id="title">Kyptoniverse</title>
        <desc id="desc">Explore our universe by learning WEB3</desc>
        <path
          className={classNames}
          d="M120.74 501.1l212.51 -276.85c7.33,-9.03 16.65,-13.55 27.94,-13.55l107.52 0c3.39,0 5.78,1.27 7.2,3.81 1.41,2.54 1.27,5.22 -0.43,8.04l-218.43 284.48 217.59 284.47c2.25,2.82 2.68,5.5 1.27,8.04 -1.42,2.54 -3.81,3.81 -7.2,3.81l-107.52 0c-11.29,0 -20.61,-4.52 -27.94,-13.55l-212.51 -276c-2.82,-4.52 -2.82,-8.75 0,-12.7zm-142.24 -280.24c0,-2.82 0.99,-5.22 2.97,-7.19 1.97,-1.98 4.37,-2.97 7.19,-2.97l87.21 0c7.34,0 11,3.39 11,10.16l0 572.33c0,6.77 -3.66,10.16 -11,10.16l-87.21 0c-2.82,0 -5.22,-0.99 -7.19,-2.96 -1.98,-1.98 -2.97,-4.38 -2.97,-7.2l0 -572.33zm563.86 -1.69c0,-2.82 0.99,-5.22 2.97,-7.2 1.97,-1.97 4.37,-2.96 7.19,-2.96l447.03 0c2.82,0 5.22,0.99 7.2,2.96 1.97,1.98 2.96,4.38 2.96,7.2l0 124.45c0,7.91 -2.54,14.96 -7.62,21.17l-133.77 175.25 191.34 249.76c1.7,2.83 1.84,5.51 0.43,8.05 -1.42,2.54 -3.53,3.81 -6.35,3.81l-107.53 0c-11.29,0 -20.6,-4.52 -27.94,-13.55l-185.41 -241.29c-3.95,-4.52 -3.95,-8.75 0,-12.7l166.79 -217.59 -248.92 0 0 474.97c0,6.77 -3.66,10.16 -11,10.16l-87.21 0c-2.82,0 -5.22,-0.99 -7.19,-2.97 -1.98,-1.97 -2.97,-4.37 -2.97,-7.19l0 -572.33zm538.47 -10.16l107.52 0c11.29,0 20.6,4.51 27.94,13.54l173.56 226.06 173.56 -226.06c7.34,-9.03 16.65,-13.54 27.94,-13.54l107.52 0c3.39,0 5.79,1.41 7.2,4.23 1.41,2.82 0.99,5.36 -1.27,7.62l-435.17 567.25c-7.34,9.03 -16.65,13.55 -27.94,13.55l-107.53 0c-2.82,0 -5.08,-1.27 -6.77,-3.81 -1.69,-2.54 -1.41,-5.22 0.85,-8.05l191.34 -249.76 -244.68 -319.18c-2.26,-2.26 -2.54,-4.8 -0.85,-7.62 1.7,-2.82 3.95,-4.23 6.78,-4.23zm691.7 582.49l0 -572.33c0,-2.82 0.99,-5.22 2.97,-7.2 1.97,-1.97 4.37,-2.96 7.19,-2.96l447.03 0c2.82,0 5.22,0.99 7.2,2.96 1.97,1.98 2.96,4.38 2.96,7.2l0 124.45c0,7.91 -2.54,14.96 -7.62,21.17l-123.61 161.71c-7.34,9.03 -16.65,13.54 -27.94,13.54l-107.52 0c-3.39,0 -5.79,-1.27 -7.2,-3.8 -1.41,-2.54 -0.99,-5.23 1.27,-8.05l162.56 -211.66 -248.92 0 0 474.97c0,6.77 -3.66,10.16 -11,10.16l-87.21 0c-2.82,0 -5.22,-0.99 -7.19,-2.97 -1.98,-1.97 -2.97,-4.37 -2.97,-7.19zm525.77 -572.33c0,-2.82 0.99,-5.22 2.97,-7.2 1.97,-1.97 4.37,-2.96 7.19,-2.96l367.44 0c11.29,0 20.61,4.51 27.94,13.54l62.65 82.13c2.26,2.82 2.69,5.5 1.27,8.04 -1.41,2.54 -3.81,3.81 -7.19,3.81l-188.8 0 0 474.97c0,6.77 -3.39,10.16 -10.16,10.16l-87.21 0c-6.77,0 -10.16,-3.39 -10.16,-10.16l0 -474.97 -155.78 0c-2.82,0 -5.22,-0.99 -7.19,-2.96 -1.98,-1.98 -2.97,-4.38 -2.97,-7.2l0 -87.2zm512.22 285.32c0,-43.46 8.04,-83.96 24.13,-121.5 16.08,-37.53 37.81,-69.99 65.19,-97.36 27.37,-27.38 59.69,-48.82 96.94,-64.35 37.25,-15.52 77.33,-23 120.22,-22.43 42.9,0.56 82.97,9.03 120.23,25.4 37.25,16.37 69.56,38.66 96.94,66.88 27.37,28.22 48.96,61.1 64.76,98.64 15.81,37.53 23.43,77.46 22.86,119.8 -0.56,42.89 -9.03,82.97 -25.4,120.22 -16.36,37.25 -38.52,69.71 -66.46,97.36 -27.94,27.66 -60.53,49.25 -97.78,64.77 -37.26,15.52 -77.33,23.28 -120.23,23.28 -42.33,0 -81.98,-8.04 -118.95,-24.13 -36.97,-16.08 -69,-38.1 -96.09,-66.03 -27.1,-27.94 -48.26,-60.82 -63.5,-98.64 -15.24,-37.81 -22.86,-78.45 -22.86,-121.91zm108.37 4.23c0,27.66 5.36,53.9 16.08,78.74 10.73,24.83 25.12,46.56 43.18,65.19 18.07,18.62 38.95,33.3 62.65,44.02 23.71,10.73 49.11,16.09 76.2,16.09 26.53,-0.56 51.65,-6.49 75.35,-17.78 23.71,-11.29 44.45,-26.39 62.23,-45.3 17.78,-18.9 31.75,-40.92 41.91,-66.03 10.16,-25.12 14.96,-51.51 14.39,-79.16 0,-27.66 -5.36,-53.91 -16.08,-78.74 -10.73,-24.84 -25.12,-46.43 -43.18,-64.77 -18.06,-18.34 -39.09,-32.88 -63.08,-43.6 -23.98,-10.73 -49.24,-16.09 -75.77,-16.09 -26.53,0.57 -51.65,6.35 -75.35,17.36 -23.71,11 -44.31,25.96 -61.81,44.87 -17.49,18.91 -31.32,40.78 -41.48,65.62 -10.16,24.83 -15.24,51.36 -15.24,79.58zm600.26 284.47l0 -572.33c0,-2.82 0.99,-5.22 2.97,-7.19 1.97,-1.98 4.37,-2.97 7.19,-2.97l80.44 0c11.28,0 20.6,4.52 27.93,13.55l304.79 396.23 0 -399.62c0,-6.77 3.39,-10.16 10.16,-10.16l87.21 0c6.77,0 10.16,3.39 10.16,10.16l0 572.33c0,6.77 -3.39,10.16 -10.16,10.16l-80.43 0c-11.29,0 -20.6,-4.52 -27.94,-13.55l-303.95 -396.22 0 399.61c0,6.77 -3.66,10.16 -11,10.16l-87.21 0c-2.82,0 -5.22,-0.99 -7.19,-2.96 -1.98,-1.98 -2.97,-4.38 -2.97,-7.2zm662.92 -582.49l87.21 0c7.34,0 11,3.39 11,10.16l0 572.33c0,6.77 -3.66,10.16 -11,10.16l-87.21 0c-2.82,0 -5.22,-0.99 -7.19,-2.96 -1.98,-1.98 -2.97,-4.38 -2.97,-7.2l0 -572.33c0,-2.82 0.99,-5.22 2.97,-7.19 1.97,-1.98 4.37,-2.97 7.19,-2.97zm230.29 -1.69l87.21 0c2.82,0 5.36,0.99 7.62,2.96 2.26,1.98 3.38,4.38 3.38,7.2l0 399.61 303.95 -396.23c7.34,-9.03 16.65,-13.54 27.94,-13.54l107.52 0c3.39,0 5.79,1.41 7.2,4.23 1.41,2.82 1.27,5.36 -0.43,7.62l-436.02 567.25c-7.33,9.03 -16.65,13.55 -27.93,13.55l-80.44 0c-2.82,0 -5.22,-0.99 -7.19,-2.97 -1.98,-1.97 -2.97,-4.37 -2.97,-7.19l0 -572.33c0,-2.82 0.99,-5.22 2.97,-7.2 1.97,-1.97 4.37,-2.96 7.19,-2.96zm611.27 11.85c0,-2.82 0.99,-5.22 2.97,-7.19 1.97,-1.98 4.37,-2.97 7.19,-2.97l365.75 0c6.78,0 10.16,3.39 10.16,10.16l0 87.21c0,6.77 -3.38,10.16 -10.16,10.16l-267.54 0 0 135.46 211.66 0c6.78,0 10.16,3.38 10.16,10.16l0 86.35c0,7.34 -3.38,11.01 -10.16,11.01l-211.66 0 0 134.62 293.79 0c3.39,0 5.78,1.41 7.2,4.23 1.41,2.82 0.98,5.36 -1.27,7.62l-62.66 82.12c-7.33,9.03 -16.65,13.55 -27.94,13.55l-307.33 0c-2.82,0 -5.22,-0.99 -7.19,-2.96 -1.98,-1.98 -2.97,-4.38 -2.97,-7.2l0 -572.33zm491.05 -1.69c0,-2.82 0.99,-5.22 2.97,-7.2 1.97,-1.97 4.37,-2.96 7.19,-2.96l447.03 0c2.82,0 5.22,0.99 7.2,2.96 1.97,1.98 2.96,4.38 2.96,7.2l0 124.45c0,7.91 -2.54,14.96 -7.62,21.17l-133.77 175.25 191.34 249.76c1.7,2.83 1.84,5.51 0.43,8.05 -1.42,2.54 -3.53,3.81 -6.35,3.81l-107.53 0c-11.29,0 -20.6,-4.52 -27.94,-13.55l-185.41 -241.29c-3.95,-4.52 -3.95,-8.75 0,-12.7l166.79 -217.59 -248.92 0 0 474.97c0,6.77 -3.66,10.16 -11,10.16l-87.21 0c-2.82,0 -5.22,-0.99 -7.19,-2.97 -1.98,-1.97 -2.97,-4.37 -2.97,-7.19l0 -572.33zm570.64 165.09c0,-26.52 5.5,-51.08 16.51,-73.65 11,-22.58 25.96,-42.05 44.87,-58.42 18.91,-16.37 40.92,-29.35 66.04,-38.95 25.11,-9.59 51.78,-14.39 80.01,-14.39 44.02,0 82.26,7.76 114.72,23.28 32.45,15.52 56.86,33.44 73.23,53.76 3.95,5.08 3.67,9.6 -0.85,13.55l-58.42 60.96c-2.25,2.26 -4.93,3.38 -8.04,3.38 -3.1,0 -5.78,-1.41 -8.04,-4.23 -5.08,-5.64 -11.43,-11.29 -19.05,-16.93 -7.62,-5.65 -16.37,-10.87 -26.25,-15.66 -9.87,-4.8 -20.46,-8.61 -31.75,-11.43 -11.28,-2.83 -22.86,-4.24 -34.71,-4.24 -14.11,0 -26.95,2.12 -38.52,6.35 -11.57,4.24 -21.31,9.74 -29.21,16.51 -7.9,6.77 -14.11,14.68 -18.63,23.71 -4.51,9.03 -6.77,18.62 -6.77,28.78 0,16.37 5.36,30.48 16.09,42.34 10.72,11.85 26.81,20.03 48.26,24.55l82.97 16.08c27.09,5.08 50.94,13.13 71.54,24.13 20.6,11.01 37.81,24.13 51.64,39.37 13.83,15.24 24.41,32.32 31.75,51.22 7.34,18.91 11.01,38.81 11.01,59.69 0,22.58 -4.66,44.87 -13.97,66.89 -9.31,22.01 -23.14,41.76 -41.49,59.26 -18.34,17.5 -40.78,31.47 -67.3,41.91 -26.53,10.44 -57.01,15.66 -91.44,15.66 -24.27,0 -46.99,-2.54 -68.16,-7.62 -21.16,-5.08 -40.35,-11.71 -57.57,-19.89 -17.21,-8.19 -32.31,-17.22 -45.29,-27.1 -12.98,-9.87 -23.71,-19.61 -32.18,-29.2 -3.95,-3.96 -3.95,-8.47 0,-13.55l53.34 -68.58c1.7,-2.82 4.1,-4.37 7.2,-4.66 3.1,-0.28 5.79,0.71 8.04,2.97 7.9,7.34 16.65,14.81 26.25,22.43 9.59,7.62 20.04,14.54 31.32,20.75 11.29,6.21 23.43,11.29 36.41,15.24 12.98,3.95 26.81,5.92 41.49,5.92 31.04,0 54.74,-6.77 71.11,-20.32 16.37,-13.54 24.56,-31.04 24.56,-52.49 0,-16.93 -6.07,-31.75 -18.21,-44.45 -12.13,-12.7 -30.05,-21.3 -53.76,-25.82l-82.97 -16.93c-47.41,-9.6 -85.23,-29.07 -113.45,-58.42 -28.22,-29.35 -42.33,-66.6 -42.33,-111.76zm514.75 -163.4c0,-2.82 0.99,-5.22 2.97,-7.19 1.97,-1.98 4.37,-2.97 7.19,-2.97l365.75 0c6.78,0 10.16,3.39 10.16,10.16l0 87.21c0,6.77 -3.38,10.16 -10.16,10.16l-267.54 0 0 135.46 211.66 0c6.78,0 10.16,3.38 10.16,10.16l0 86.35c0,7.34 -3.38,11.01 -10.16,11.01l-211.66 0 0 134.62 293.79 0c3.39,0 5.78,1.41 7.2,4.23 1.41,2.82 0.98,5.36 -1.27,7.62l-62.66 82.12c-7.33,9.03 -16.65,13.55 -27.94,13.55l-307.33 0c-2.82,0 -5.22,-0.99 -7.19,-2.96 -1.98,-1.98 -2.97,-4.38 -2.97,-7.2l0 -572.33z"
        />
      </svg>
    </>
  );
};

export default KryptoniverseTypo;
