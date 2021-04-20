import Lottie from "react-lottie";

const LottieData = ({ data }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return <Lottie  options={options} />
};

export default LottieData