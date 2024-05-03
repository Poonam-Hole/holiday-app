import { memo } from "react";

const MatterhornPopup = memo(({ onClose }) => {
  return (
    <div className="relative rounded-lg bg-white w-[56.25rem] flex flex-col items-start justify-start p-[1.25rem] box-border max-w-full max-h-full overflow-auto sm:p-[0.625rem] sm:box-border">
      <iframe
        className="self-stretch relative h-[35rem] sm:h-[50.625vw!important]"
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
});

export default MatterhornPopup;
