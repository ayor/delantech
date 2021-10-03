import PageNav from '../Navbar/PageNav';
import Igloohome from "../../public/img/igloo.jpeg";
import Bes from "../../public/img/Bes.jpeg";
import Iotty from "../../public/img/Iotty.jpeg";
import SmartG4 from "../../public/img/SmartG4.jpeg";
import Image from 'next/image'
import TeamStyle from '../../styles/Team.module.css';
const Partners = () => (
    <section className={"container my-4 " + TeamStyle.Team} id="team" >
        <PageNav pageName={"our partners"} />
        <div className="row m-3 p-3">
            <div className="col col-md-3  ">
                <Image src={Igloohome} width="100" height="100" className="img-fluid rounded-circle" alt="Igloohome" />
            </div>
            <div className="col col-md-3  ">
                <Image src={Bes} width="100" height="100" className="img-fluid rounded-circle" alt="Bes" />
            </div>
            <div className="col col-md-3  ">
                <Image src={Iotty} width="100" height="100" className="img-fluid rounded-circle" alt="Iotty" />
            </div>
            <div className="col col-md-3  ">
                <Image src={SmartG4} width="100" height="100" className="img-fluid rounded-circle" alt="SmartG4" />
            </div>
        </div>

    </section>
);

export default Partners;