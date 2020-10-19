import React from "react";
import {Link} from 'react-router-dom';
import "../App.css"

const SecondDiv = () => {
  return (
    <div className="seconddiv">
      <h1 className="looky">Take A Look</h1>
      <div className="row row-cols-1 row-cols-md-2 cardDeck">
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/csgo">
          <img
            src="https://cdn.wallpapersafari.com/76/68/k6fE7c.jpg"
            className="card-img-top"
            alt="csgo"
          />
          <div className="card-body">
            <h5>Counter Strike: Global Offensive</h5>
            <strong>r/csgo</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/DotA2">
          <img
            src="https://wallpapercave.com/wp/wp2532627.jpg"
            className="card-img-top"
            alt="dota"
          />
          <div className="card-body">
            <h5>Dota2</h5>
           <strong>r/DotA2</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/FortNiteBR" >
          <img
            src="https://wallpapercave.com/wp/wp4905843.jpg"
            className="card-img-top"
            alt="fortnite"
          />
          <div className="card-body">
            <h5>Fortnite</h5>
          <strong>r/FortNiteBR</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/leagueoflegends">
          <img
            src="https://wallpaperaccess.com/full/217097.jpg"
            className="card-img-top"
            alt="LoL"
          />
          <div className="card-body">
            <h5>League Of Legends</h5>
           <strong>r/leagueoflegends</strong> 
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/starcraft2">
          <img
            src="https://supertabthemes.com/wp-content/uploads/2019/02/Slika-1-12-1024x538.jpg"
            className="card-img-top"
            alt="sc2"
          />
          <div className="card-body">
            <h5>StarCraft2</h5>
           <strong>r/starsraft2</strong> 
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/pubg">
          <img
            src="https://wallpapercave.com/wp/wp2462450.jpg"
            className="card-img-top"
            alt="pubg"
          />
          <div className="card-body">
            <h5>PlayerUnknown's Battlegrounds</h5>
          <strong>r/pubg</strong>  
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/Overwatch">
          <img
            src="https://images.wallpapersden.com/image/download/4k-genji-overwatch_67506_3840x2160.jpg"
            className="card-img-top"
            alt="overwatch"
          />
          <div className="card-body">
          
            <h5>Overwatch</h5>
            <strong>r/overwatch</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/hearthstone">
          <img
            src="https://wallpaperaccess.com/full/1376108.jpg"
            className="card-img-top"
            alt="hearthstone"
          />
          <div className="card-body">
            <h5>HearthStone</h5>
            <strong>r/hearthstone</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/heroesofthestorm">
          <img
            src="https://images5.alphacoders.com/382/thumb-1920-382409.jpg"
            className="card-img-top"
            alt="hots"
          />
          <div className="card-body">
            <h5>Heroes Of The Storm</h5>
            <strong>r/heroesofthestorm</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/CODWarzone">
          <img
            src="https://wallpapercave.com/wp/wp5825925.jpg"
            className="card-img-top"
            alt="codwz"
          />
          <div className="card-body">
            <h5>Call Of Duty: Warzone</h5>
            <strong>r/CODWarzone</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/arenaofvalor">
          <img
            src="https://images.hdqwalls.com/wallpapers/quillen-arena-of-valor-al.jpg"
            className="card-img-top"
            alt="aov"
          />
          <div className="card-body">
            <h5>Arena Of Valor</h5>
            <strong>r/arenaofvalor</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/Rainbow6">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/806/964/867/video-games-rainbow-six-siege-wallpaper-thumb.jpg"
            className="card-img-top"
            alt="rs6"
          />
          <div className="card-body">
            <h5>Rainbow Six Siege</h5>
            <strong>r/Rainbow6</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/RocketLeague">
          <img
            src="https://wallpapercave.com/wp/wp6005269.jpg"
            className="card-img-top"
            alt="rl"
          />
          <div className="card-body">
            <h5>Rocket League</h5>
            <strong>r/RocketLeague</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/Smite">
          <img
            src="https://images7.alphacoders.com/900/thumb-1920-900445.jpg"
            className="card-img-top"
            alt="smite"
          />
          <div className="card-body">
            <h5>SMITE</h5>
            <strong>r/Smite</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/assassinscreed">
          <img
            src="https://store-images.s-microsoft.com/image/apps.11304.64526738698251537.edb73639-1760-4436-8c53-3935ff2aab2a.b927bcd9-b9c8-4fcb-8cb1-e24936707fd8?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF"
            className="card-img-top"
            alt="ac"
          />
          <div className="card-body">
            <h5>Assassin's Creed™</h5>
            <strong>r/assassinscreed</strong>
          </div>
          </Link>
        </div>
        <div className="card cat-card" style={{ width: "18rem" }}>
        <Link to="/needforspeed">
          <img
            src="https://media.contentapi.ea.com/content/dam/need-for-speed/nfs-heat/images/2020/06/nfs-web-1920x1080-5titles-updated-3-1.jpg.adapt.crop16x9.431p.jpg"
            className="card-img-top"
            alt="nfs"
          />
          <div className="card-body">
            <h5>NeedForSpeed™</h5>
            <strong>r/needforspeed</strong>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
