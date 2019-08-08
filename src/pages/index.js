import PrintPmtkFigure from '../component/PrintPmtkFigure'
import Contentinner  from '../component/content-inner'
import Unrecommended from '../component/Unrecommended'
import Adultsexvideo from '../component/adultsexvideo'
import ContentHot from '../component/content-Hot'
export default function() {
  return (
    <div className="bg">
      <PrintPmtkFigure/>
      <Unrecommended />
      <h2>新歌速递</h2>
      <Contentinner />
      <h2>热门歌单</h2>
      <ContentHot />
      <h2>热门视频</h2>
      <Adultsexvideo />
    </div>
  );
}
