import React from "react";
import {Link} from 'react-router-dom';
import PostPage from './PostPage';
import "../App.css"

const SecondDiv = () => {
  return (
    <div className="seconddiv">
      <h1>Take A Look</h1>
      <div className="row row-cols-1 row-cols-md-2 cardDeck">
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.wallpapersafari.com/76/68/k6fE7c.jpg"
            className="card-img-top"
            alt="csgo"
          />
          <div className="card-body">
            <h5>Counter Strike: Global Offensive</h5>
            <Link to="/csgo">r/csgo</Link>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://wallpapercave.com/wp/wp2532627.jpg"
            className="card-img-top"
            alt="dota"
          />
          <div className="card-body">
            <h5>Dota2</h5>
            <Link to="/DotA2">r/DotA2</Link>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://wallpapercave.com/wp/wp4905843.jpg"
            className="card-img-top"
            alt="fortnite"
          />
          <div className="card-body">
            <h5>Fortnite</h5>
            <Link to="/FortNiteBR" >r/FortNiteBR</Link>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://wallpaperaccess.com/full/217097.jpg"
            className="card-img-top"
            alt="LoL"
          />
          <div className="card-body">
            <h5>League Of Legends</h5>
            <Link to="/leagueoflegends">r/leagueoflegends</Link>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://supertabthemes.com/wp-content/uploads/2019/02/Slika-1-12-1024x538.jpg"
            className="card-img-top"
            alt="sc2"
          />
          <div className="card-body">
            <h5>StarCraft2</h5>
            <Link to="/starcraft2">r/starsraft2</Link>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://wallpapercave.com/wp/wp2462450.jpg"
            className="card-img-top"
            alt="pubg"
          />
          <div className="card-body">
            <h5>PlayerUnknown's Battlegrounds</h5>
            <Link to="/PUBATTLEGROUNDS">r/pubg</Link>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://images.wallpapersden.com/image/download/4k-genji-overwatch_67506_3840x2160.jpg"
            className="card-img-top"
            alt="overwatch"
          />
          <div className="card-body">
          <Link to="/Overwatch">
            <h5>Overwatch</h5>
            <strong>r/overwatch</strong>
            </Link>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://wallpaperaccess.com/full/1376108.jpg"
            className="card-img-top"
            alt="hearthstone"
          />
          <div className="card-body">
            <h5>HearthStone</h5>
            <a>r/hearthstone</a>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://images5.alphacoders.com/382/thumb-1920-382409.jpg"
            className="card-img-top"
            alt="hots"
          />
          <div className="card-body">
            <h5>Heroes Of The Storm</h5>
            <a>r/hots</a>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://wallpapercave.com/wp/wp5825925.jpg"
            className="card-img-top"
            alt="codwz"
          />
          <div className="card-body">
            <h5>Call Of Duty: Warzone</h5>
            <a>r/codwz</a>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://images.hdqwalls.com/wallpapers/quillen-arena-of-valor-al.jpg"
            className="card-img-top"
            alt="aov"
          />
          <div className="card-body">
            <h5>Arena Of Valor</h5>
            <a>r/aov</a>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/806/964/867/video-games-rainbow-six-siege-wallpaper-thumb.jpg"
            className="card-img-top"
            alt="rs6"
          />
          <div className="card-body">
            <h5>Rainbow Six Siege</h5>
            <a>r/rs6</a>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://wallpapercave.com/wp/wp6005269.jpg"
            className="card-img-top"
            alt="rl"
          />
          <div className="card-body">
            <h5>Rocket League</h5>
            <a>r/rl</a>
          </div>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
          <img
            src="https://images7.alphacoders.com/900/thumb-1920-900445.jpg"
            className="card-img-top"
            alt="smite"
          />
          <div className="card-body">
            <h5>SMITE</h5>
            <a>r/smite</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
