type VideoPlayerProps = {
  url: string;
};

function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className="video-responsive rounded-lg overflow-hidden m-2s">
      <iframe
        width="853"
        height="480"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default VideoPlayer;
