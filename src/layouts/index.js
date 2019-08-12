import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import router from 'umi/router'
import { connect }  from 'dva'
function BasicLayout(props) {
   if(props.location.pathname  ==='/my_putchar'){
     if(localStorage.getItem('id') == null){
      router.push('/longin_regin')
     }
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
function mapStateToprops(state){
  return state.Musicdata
}
export default connect(mapStateToprops)(BasicLayout) ;
