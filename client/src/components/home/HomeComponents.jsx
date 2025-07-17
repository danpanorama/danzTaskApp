import "../../css/home.css";
import "../../App.css";
import BoldHeader from "../headers/BoldHeader";
import LightHeader from "../headers/LightHeader";
import HomeHero from "./HomeHero";
import PrimaryHeader from "../headers/PrimaryHeader";
import ImageSection from "./ImageSection";
import LineComponent from "../util/LineComponent";
import XscrollSection from "./XscrollSection";
import BrownButton from "../buttons/BrownButton";
import GridSection from "./GridSection";
import Paragraph from "../text/Paragraph";
import LinkToContinue from "../links/LinkToContinue";
import BackgroundHeader from "../headers/BackgroundHeader";
import PresentBox from "./PresentBox";
import Footer from "../footer/Footer";

const HomeComponents = () => {
  return (
    <div className="homeComponent flex-col-center">
      <div className="textHolder">
        <BoldHeader title={"בגדי תינוקות לבנים"} />
        <LightHeader title={"בעיצוב ייחודי ובאיכות ללא פשרות"} />
      </div>
      <HomeHero />

      <div className="homeSpace flex-col-center">
        <PrimaryHeader title={"מבצעים חמים בחנות"} />
        <LightHeader title="חוגגים את האביב במבצעים מטורפים!" />
      </div>
      <ImageSection />
      <div className="homeBigSpace test">
        <LineComponent />
      </div>
      <div className=" flex-col-center">
        <PrimaryHeader title={" כזה עוד לא ראית! "} />
        <LightHeader title="העיצובים החדשים  שלנו במחירי הכרות" />
      </div>
      <XscrollSection />
      <BrownButton title="כל המוצרים שלנו" />
      <div className="homeBigSpace test">
        <LineComponent />
      </div>
      <div className=" flex-col-center">
        <LightHeader title="     מוצר איכותי בעיצוב ישראלי" />
        <PrimaryHeader title={"   כל המוצרים שלנו "} />
      </div>

      <GridSection />

      <BrownButton title="  לקטלוג המוצרים המלא" />
      <div className="homeBigSpace test">
        <LineComponent />
      </div>

      <BoldHeader title={"  הסיפור של דורו"} />
      <br />
      <br />
      <Paragraph
        text={
          "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."
        }
      />
      <br />
      <Paragraph
        text={
          "להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק"
        }
      />
      <br />

      <LinkToContinue text="<המשך קריאה" />
      <div className="homeBigSpace test">
        <LineComponent />
      </div>
      <PresentBox />

      <Footer />
    </div>
  );
};

export default HomeComponents;
