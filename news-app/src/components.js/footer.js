function Footer(){
    return (
        <footer className="footer bg-dark text-white text-center py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>&copy; {new Date().getFullYear()} NewsNow. All rights reserved.</p>
              </div>
              
            </div>
          </div>
        </footer>
      );
}

export default Footer;