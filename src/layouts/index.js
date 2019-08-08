import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import NextPageToken from './nextPageToken'
import Longin from './longin_regin'
import Songs from './Songs'
function BasicLayout(props) {
    if(props.location.pathname === '/nextPageToken'){
      return <NextPageToken>{ props.children }</NextPageToken>
    }
    if(props.location.pathname === '/Songs'){
      return <Songs>{ props.children }</Songs>
    }
    if(props.location.pathname === '/longin_regin'){
      return <Longin>{ props.children }</Longin>
    }
  return (
    <div>
      <div className="site_header" >
        <Navbar/>
      </div>
    <div className="ContentPage">
      {props.children}
    </div>
    <Footer/>
    </div>
  )
}

export default BasicLayout;
