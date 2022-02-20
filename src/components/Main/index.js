import "./Main.css";

const Main = ({ punk }) => {
  return (
    <div className="main">
      <div className="content">
        <div className="highlight">
          <div className="punkContainer">
            <img className="punkImage" src={punk.image_url} alt="" />
          </div>
        </div>
        <div className="punkDetails">
          <div className="title">
            {punk.name} <span className="itemNumber">#{punk.token_id}</span>
          </div>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={punk.owner.profile_img_url} alt="" />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="ownerAddress">{punk.owner.address}</div>
              <div className="ownerHandle">@dafaqtx</div>
            </div>
            <div className="ownerLink">
              <img src="/img/owner/instagram.png" alt="instagram" />
            </div>
            <div className="ownerLink">
              <img src="/img/owner/twitter.png" alt="twitter" />
            </div>
            <div className="ownerLink">
              <img src="/img/owner/more.png" alt="more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
