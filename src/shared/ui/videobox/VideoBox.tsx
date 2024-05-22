import style from './videoBox.module.scss';

interface VideoBoxProps {
  source: string;
  videoType: string;
  isShowShadow?: boolean;
}

const VideoBox = ({ source, videoType, isShowShadow = true }: VideoBoxProps) => {
  return (
    <div className={style.videoBox}>
      <video className={style.video} loop muted autoPlay playsInline>
        <source src={source} type={videoType} />
      </video>

      {isShowShadow && <div className={style.shadow} />}

      <div className={style.textContent}>
        <h3 className={style.title}>ДЕЛАЕМ ПРОИЗВОДСТВО ЭФФЕКТИВНЕЕ</h3>
      </div>
    </div>
  );
};

export default VideoBox;
