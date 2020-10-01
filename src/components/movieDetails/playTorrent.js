import React, { Component } from "react";
import WebTorrent from "webtorrent";
import queryString from "query-string";

class Player extends Component {
  state = {
    torrentInfoHash: "",
    torrentMagnetURI: "",
    torrentName: "",
    torrentProgress: "",
    torrentFiles: [],
  };

  componentDidMount() {
    console.log(this.props);
    const parsed = queryString.parse(this.props.location.search);

    const torrentId = parsed.torrent;

    const client = new WebTorrent();
    client.on("error", (err) => {
      console.log("[+] Webtorrent error: " + err.message);
    });

    client.add(torrentId, (torrent) => {
      const interval = setInterval(() => {
        // console.log('[+] Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
        this.setState({
          torrentProgress: (torrent.progress * 100).toFixed(1) + "%",
        });
      }, 1000);

      torrent.on("done", () => {
        console.log("Progress: 100%");
        // Clear interval after completes the download
        clearInterval(interval);
      });

      this.setState({
        torrentInfoHash: torrent.infoHash,
        torrentMagnetURI: torrent.magnetURI,
        torrentName: torrent.name,
        torrentFiles: torrent.files,
      });
      console.log(torrent);
      // TODO Figure out a better way to render these files
      this.state.torrentFiles.map((file, i) => {
        file.appendTo("#player");
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.torrentName}</h1>
        <p>
          <b>Torrent Info Hash: </b>
          {this.state.torrentInfoHash}
        </p>
        <p>
          <b>Torrent Progress: </b>
          {this.state.torrentProgress}
        </p>
        <div id="player"></div>
      </div>
    );
  }
}

export default Player;
