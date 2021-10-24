import PageNav from '../Navbar/PageNav';
import Igloohome from '../../public/img/igloo.jpeg';
import Bes from '../../public/img/Bes.jpeg';
import Iotty from '../../public/img/iotty.jpeg';
import SmartG4 from '../../public/img/smartG4.jpeg';
import Fibaro from '../../public/img/fibaro.jpeg';
import Image from 'next/image';
import TeamStyle from '../../styles/Team.module.css';
const Partners = () => (
  <section className={'container my-4 ' + TeamStyle.Team} id="team">
    <PageNav pageName={'our partners'} />
    <div className="row m-3 p-3">
      <div className="col d-flex justify-content-center ">
        <Image
          src={Igloohome}
          width="50"
          height="50"
          className="img-fluid rounded-circle"
          alt="Igloohome"
        />

        <Image
          src={Bes}
          width="50"
          height="50"
          className="img-fluid rounded-circle"
          alt="Bes"
        />

        <Image
          src={Iotty}
          width="50"
          height="50"
          className="img-fluid rounded-circle"
          alt="Iotty"
        />

        <Image
          src={SmartG4}
          width="50"
          height="50"
          className="img-fluid rounded-circle"
          alt="SmartG4"
        />
        <Image
          src={Fibaro}
          width="50"
          height="50"
          className="img-fluid rounded-circle"
          alt="SmartG4"
        />
      </div>
    </div>
  </section>
);

export default Partners;
