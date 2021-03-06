import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStreamerRequest, resetActiveStreamer} from "../../../../redux/streams/streamer/actions";
import Loader from "../../../../components/loaders/diamond/loader";
import {withRouter} from "react-router-dom";

class Streamer extends Component {
  componentDidMount(){
    const {match, activeStreamer, all, error, fetchStreamerRequest} = this.props;
    const {streamer} = match.params;

    if(all.length === 0 && activeStreamer === "" && error){
      fetchStreamerRequest(streamer)
    }
  }

  render() {
    const {loading, activeStreamer, error} = this.props;
    return (
      <div className="streamer">
        {
          loading && <Loader />
        }
        {
          !loading && activeStreamer && (
            <div className="streamer__channel">
              <iframe className="streamer__channel--video" title={`${activeStreamer} screen`} src={`http://player.twitch.tv/?channel=${activeStreamer}&muted=true`} frameBorder="0"/>
              <iframe className="streamer__channel--chat" title={`${activeStreamer} chat`} src={`http://www.twitch.tv/embed/${activeStreamer}/chat?darkpopout`} frameBorder="0"/>
            </div>

          )
        }
        {
          !loading && error && (
            <div>Couldn't load streamer. Try again later</div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, all, activeStreamer, error } = state.streams;
  return { loading, all, activeStreamer, error };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStreamerRequest: payload => dispatch(fetchStreamerRequest(payload)),
    resetActiveStreamer: () => dispatch(resetActiveStreamer())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Streamer));
