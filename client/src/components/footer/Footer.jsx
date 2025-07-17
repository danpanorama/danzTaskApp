import "../../css/footer.css";
import "../../App.css";
import Logo from "../../assets/doroLogo1.png";
import TransparentButton from "../buttons/TransparentButton";
import DoroLogoBig from "../logos/DoroLogoBig";
import FooterLink from "../links/FooterLink";
import GovernorsStatement from "../links/GovernorsStatement";
import TextLogo from "../logos/TextLogo";

const Footer = (props) => {
  return (
    <div className="footer">
      <DoroLogoBig />
      <TransparentButton text="משלוחים עד חמישה ימי עסקים. בישראל בלבד." />

      <div className="centerFooterLinks">
        <FooterLink text="הצטרפות למועדון הלקוחות" />
   <FooterLink path="/store" text="  כל המוצרים" />
      <FooterLink text=" אודות " />
         <FooterLink text=" יצירת קשר " />
      </div>

      <GovernorsStatement text2={'  תנאי שימוש'} text1={' הצהרת נגישות'} />

      <TextLogo/>

    </div>
  );
};

export default Footer;
