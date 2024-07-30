import "../folderstyles/Note.css"

export default function Note() {
  return (
    <div>
      <div className="container mt-4 note-wrapper" style={{display: 'flex', color: 'white', justifyContent: 'center',}}>
        <div className="col-lg-4 me-0 note-txt">
          <p>Food may not be refunded. If your food was made incorrectly we will remake it for you</p>
        </div>
        <div className="col-lg-4 me-0 note-txt">
          <p>18% service charge will be added to all checks over $100.</p>
        </div>
        <div className="col-lg-4 me-0 note-txt">
          <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
        </div>
      </div>
    </div>
  );
}
