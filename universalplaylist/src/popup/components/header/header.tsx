import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

export const Header = () => <div className="header is-clearfix">
  <span className="title is-2 has-text-white is-pulled-left">
    Universal Playlist
  </span>
  <button className="button is-success is-large is-pulled-right">
    Find Videos <FontAwesomeIcon icon={faSearch}/>
  </button>
</div>
