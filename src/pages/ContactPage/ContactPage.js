import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contactpage-container">
      <h2>Contact Me</h2>
      <form>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label for="firstName" className="form-label">Firstname</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="col-sm-6 mb-3">
            <label for="firstName" className="form-label">Lastname</label>
            <input type="text" className="form-control" id="firstName"/>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Subject</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Message</label>
          <textarea type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  )
}

export default ContactPage