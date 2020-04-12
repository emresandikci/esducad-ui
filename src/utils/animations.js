const Animations = {
  fadeIn: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation-duration:.7s;
    animation-name: fadeIn;
  `,

  fadeInDown: `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }

      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    animation-duration:.7s;
    animation-name: fadeInDown;
  `,

  fadeOut: `
    @keyframes animatetop {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    animation-duration:.7s;
    animation-name: fadeOut;
  `,

  fadeOutDown: `
    @keyframes fadeOutDown {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }
    animation-duration:.7s;
    animation-name: fadeOutDown;
  `,
  fadeInLeft: `
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  animation-duration:.7s;
  animation-name: fadeInLeft;
  `,
  fadeInRight: `
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  animation-duration:.7s;
  animation-name: fadeInRight;
  `,
  bounce: `
    @keyframes bounce {
      from,
      20%,
      53%,
      80%,
      to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0);
      }

      40%,
      43% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -30px, 0);
      }

      70% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -15px, 0);
      }

      90% {
        transform: translate3d(0, -4px, 0);
      }
    }
    animation-duration:.7s;
    animation-name: bounce;
    transform-origin: center bottom;
  `,
};
export default Animations;
