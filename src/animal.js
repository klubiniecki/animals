import React from "react";
import useSound from "use-sound";

const Animal = ({ url, src }) => {
  const [play, { stop, isPlaying }] = useSound(url);
  const clickRef = React.useRef();

  const useClickOutside = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    React.useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useClickOutside(clickRef, stop);

  const onClick = () => {
    if (isPlaying) return;
    play();
  };

  return <img onClick={onClick} ref={clickRef} src={src} alt="animal" />;
};

export default Animal;
