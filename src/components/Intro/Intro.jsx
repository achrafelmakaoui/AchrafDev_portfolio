import React from 'react';
import './Intro.css';
import { useTheme } from '../../ThemeContext';


const Intro = () => {
  const { theme } = useTheme();
  return (
    <section className='intro-section' id='intro'>
      <div className='IntroContainer'>
        <div className='intro-bar'>
          {theme==='light' &&
            <>
              <svg id="logo" width="240" height="212" viewBox="0 0 1080 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M587.78 60.4535L562.167 35.0178V510.333V985.649L587.78 960.213C587.781 960.213 587.781 960.212 587.782 960.212C592.65 955.375 602.34 945.751 615.782 932.4C660.538 887.951 746.892 802.188 835.379 714.215L835.385 714.209C892.979 657.081 945.305 604.955 983.23 567.03C1002.19 548.066 1017.55 532.658 1028.17 521.953C1033.04 517.038 1036.9 513.123 1039.65 510.313C1036.91 507.498 1033.04 503.578 1028.16 498.656C1017.55 487.946 1002.19 472.543 983.231 453.588C945.306 415.68 892.98 363.586 835.385 306.458L835.379 306.452C746.885 218.471 660.524 132.702 615.771 88.2554C602.333 74.9091 592.646 65.2888 587.78 60.4535ZM633.306 840.968L620.5 853.784V835.667V512.333V189V170.883L633.306 183.699L794.901 345.428L794.906 345.432L956.634 507.028L961.944 512.333L956.634 517.639L794.906 679.234L794.901 679.239L633.306 840.968Z" stroke="#2D2E32" strokeWidth="15"/>
                <path d="M278.618 754.745L278.619 754.746L513.323 987.931L513.567 960.023L513.567 960.001L513.815 917.422L405.363 808.97C374.955 778.562 347.277 750.717 327.197 730.387C317.159 720.224 309.011 711.929 303.366 706.128C300.548 703.231 298.334 700.937 296.817 699.335C296.065 698.542 295.448 697.881 295.004 697.388C294.793 697.153 294.558 696.888 294.351 696.637C294.261 696.527 294.08 696.305 293.89 696.032C293.867 696 293.838 695.957 293.803 695.905C293.615 695.693 293.332 695.38 292.936 694.953C291.963 693.901 290.494 692.354 288.564 690.345C284.712 686.339 279.126 680.607 272.216 673.572C258.402 659.508 239.351 640.291 218.43 619.37L142.03 542.97L129.227 530.167H147.333H297.733H448H455.5V537.667V623.533V706.391L471.02 722.616L471.031 722.628L471.043 722.64C480.059 732.15 494.963 747.434 505.387 758.123C506.158 758.914 506.904 759.679 507.622 760.415C507.627 760.421 507.632 760.426 507.637 760.431L513.833 766.714V402.6C513.833 297.468 513.8 201.904 513.733 132.624C513.7 97.9833 513.658 69.9173 513.608 50.5131C513.596 45.8824 513.584 41.7466 513.571 38.1334C511.485 40.1985 509.155 42.5056 506.592 45.0434C494 57.5144 475.806 75.5505 453.365 97.8083C408.483 142.324 346.617 203.722 278.618 271.255C210.621 338.852 148.793 400.413 103.966 445.174C81.5511 467.555 63.3923 485.731 50.8399 498.358C44.5616 504.674 39.6967 509.591 36.4062 512.949C36.3885 512.967 36.3709 512.985 36.3534 513.003C36.3718 513.022 36.3903 513.04 36.4088 513.059C39.6992 516.42 44.564 521.342 50.8421 527.663C63.3941 540.3 81.5526 558.488 103.967 580.877C148.794 625.654 210.622 687.215 278.618 754.745ZM455.5 464.333V471.833H448H311.733H175.333H157.227L170.03 459.03L306.03 323.03C343.431 285.629 377.467 251.627 402.169 226.975C414.52 214.649 424.539 204.659 431.48 197.749C434.949 194.295 437.653 191.608 439.495 189.782C440.415 188.87 441.126 188.167 441.613 187.689C441.854 187.452 442.053 187.258 442.199 187.117C442.228 187.089 442.259 187.059 442.291 187.028C442.336 186.985 442.383 186.941 442.428 186.898C442.459 186.869 442.54 186.794 442.64 186.707C442.676 186.675 442.805 186.561 442.977 186.427C443.016 186.397 443.084 186.347 443.163 186.29C443.285 186.202 443.435 186.097 443.548 186.022C443.964 185.774 445.957 185.015 447.6 184.833C449.17 184.999 451.69 186.046 452.611 186.753C453.146 187.283 453.904 188.268 454.157 188.69C454.591 189.469 454.779 190.146 454.833 190.339C454.971 190.834 455.027 191.241 455.041 191.347L455.042 191.352C455.083 191.647 455.1 191.901 455.107 192C455.124 192.253 455.136 192.535 455.144 192.788C455.162 193.322 455.178 194.069 455.193 194.989C455.222 196.842 455.25 199.552 455.275 203.01C455.325 209.934 455.367 219.935 455.4 232.263C455.467 256.923 455.5 290.93 455.5 328.333V464.333Z" stroke="#2D2E32" strokeWidth="15"/>
              </svg>
            </>
          }
          {theme==='dark' &&
            <>
              <svg id="logo" width="240" height="212" viewBox="0 0 1080 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M587.78 60.4535L562.167 35.0178V510.333V985.649L587.78 960.213C587.781 960.213 587.781 960.212 587.782 960.212C592.65 955.375 602.34 945.751 615.782 932.4C660.538 887.951 746.892 802.188 835.379 714.215L835.385 714.209C892.979 657.081 945.305 604.955 983.23 567.03C1002.19 548.066 1017.55 532.658 1028.17 521.953C1033.04 517.038 1036.9 513.123 1039.65 510.313C1036.91 507.498 1033.04 503.578 1028.16 498.656C1017.55 487.946 1002.19 472.543 983.231 453.588C945.306 415.68 892.98 363.586 835.385 306.458L835.379 306.452C746.885 218.471 660.524 132.702 615.771 88.2554C602.333 74.9091 592.646 65.2888 587.78 60.4535ZM633.306 840.968L620.5 853.784V835.667V512.333V189V170.883L633.306 183.699L794.901 345.428L794.906 345.432L956.634 507.028L961.944 512.333L956.634 517.639L794.906 679.234L794.901 679.239L633.306 840.968Z" stroke="#F5F5F5" strokeWidth="15"/>
                <path d="M278.618 754.745L278.619 754.746L513.323 987.931L513.567 960.023L513.567 960.001L513.815 917.422L405.363 808.97C374.955 778.562 347.277 750.717 327.197 730.387C317.159 720.224 309.011 711.929 303.366 706.128C300.548 703.231 298.334 700.937 296.817 699.335C296.065 698.542 295.448 697.881 295.004 697.388C294.793 697.153 294.558 696.888 294.351 696.637C294.261 696.527 294.08 696.305 293.89 696.032C293.867 696 293.838 695.957 293.803 695.905C293.615 695.693 293.332 695.38 292.936 694.953C291.963 693.901 290.494 692.354 288.564 690.345C284.712 686.339 279.126 680.607 272.216 673.572C258.402 659.508 239.351 640.291 218.43 619.37L142.03 542.97L129.227 530.167H147.333H297.733H448H455.5V537.667V623.533V706.391L471.02 722.616L471.031 722.628L471.043 722.64C480.059 732.15 494.963 747.434 505.387 758.123C506.158 758.914 506.904 759.679 507.622 760.415C507.627 760.421 507.632 760.426 507.637 760.431L513.833 766.714V402.6C513.833 297.468 513.8 201.904 513.733 132.624C513.7 97.9833 513.658 69.9173 513.608 50.5131C513.596 45.8824 513.584 41.7466 513.571 38.1334C511.485 40.1985 509.155 42.5056 506.592 45.0434C494 57.5144 475.806 75.5505 453.365 97.8083C408.483 142.324 346.617 203.722 278.618 271.255C210.621 338.852 148.793 400.413 103.966 445.174C81.5511 467.555 63.3923 485.731 50.8399 498.358C44.5616 504.674 39.6967 509.591 36.4062 512.949C36.3885 512.967 36.3709 512.985 36.3534 513.003C36.3718 513.022 36.3903 513.04 36.4088 513.059C39.6992 516.42 44.564 521.342 50.8421 527.663C63.3941 540.3 81.5526 558.488 103.967 580.877C148.794 625.654 210.622 687.215 278.618 754.745ZM455.5 464.333V471.833H448H311.733H175.333H157.227L170.03 459.03L306.03 323.03C343.431 285.629 377.467 251.627 402.169 226.975C414.52 214.649 424.539 204.659 431.48 197.749C434.949 194.295 437.653 191.608 439.495 189.782C440.415 188.87 441.126 188.167 441.613 187.689C441.854 187.452 442.053 187.258 442.199 187.117C442.228 187.089 442.259 187.059 442.291 187.028C442.336 186.985 442.383 186.941 442.428 186.898C442.459 186.869 442.54 186.794 442.64 186.707C442.676 186.675 442.805 186.561 442.977 186.427C443.016 186.397 443.084 186.347 443.163 186.29C443.285 186.202 443.435 186.097 443.548 186.022C443.964 185.774 445.957 185.015 447.6 184.833C449.17 184.999 451.69 186.046 452.611 186.753C453.146 187.283 453.904 188.268 454.157 188.69C454.591 189.469 454.779 190.146 454.833 190.339C454.971 190.834 455.027 191.241 455.041 191.347L455.042 191.352C455.083 191.647 455.1 191.901 455.107 192C455.124 192.253 455.136 192.535 455.144 192.788C455.162 193.322 455.178 194.069 455.193 194.989C455.222 196.842 455.25 199.552 455.275 203.01C455.325 209.934 455.367 219.935 455.4 232.263C455.467 256.923 455.5 290.93 455.5 328.333V464.333Z" stroke="#F5F5F5" strokeWidth="15"/>
              </svg>
            </>
          }
        </div>
        <div className='intro-content'>
          <h1><span>Achraf El Makaoui</span></h1>
        </div>
      </div>
    </section>
  );
}

export default Intro;
