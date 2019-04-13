class Session extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.videoRemoteRef = React.createRef();
  }

  componentDidMount() {
    //   navigator.mediaDevices.getUserMedia({ video: true, audio: true }, gotMedia, function() {})
    const mediaStream = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    if (this.props.currentUser.role === "counselor") {
      mediaStream.then(stream => (this.videoRef.current.srcObject = stream));
    } else {
      mediaStream.then(stream => (this.videoRemoteRef.srcObject = stream));
    }

    // function gotMedia(stream) {
    //   const peer1 = new Peer({ initiator: true, stream: stream });
    //   const peer2 = new Peer();
    // }

    // peer1.on("signal", function(data) {
    //     peer2.signal(data);
    //   });
    // peer2.on("signal", function(data) {
    //     peer1.signal(data);

    // peer2.on("stream", function(stream) {
    //     // got remote video stream, now let's show it in a video tag
    //     this.videoRemoteRef.current.srcObject = stream;
  }

  render() {
    return (
      <React.Fragment>
        <div id="local">
          <video autoPlay={true} muted={true} ref={this.videoRef} />
        </div>
        <div id="remote">
          <video autoPlay={true} ref={this.videoRemoteRef} />
        </div>
      </React.Fragment>
    );
  }
}

export default Session;