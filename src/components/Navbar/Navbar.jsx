import { Search } from "@material-ui/icons"
import { Notifications } from "@material-ui/icons"
import { ArrowDropDown } from "@material-ui/icons"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://cdn.iconscout.com/icon/free/png-64/netflix-282224.png" height={80} alt="" />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>

        </div>
        <div className="right">
          <Search className="icons" />
          <span>KID</span>
          <Notifications className="icons" />
          <img alt="" height={34} src="https://images.pexels.com/photos/5358943/pexels-photo-5358943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
 