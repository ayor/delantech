import PageNav from '../Navbar/PageNav';
import CEO from "../../public/img/user1.jpg";
import CTO from "../../public/img/headerImg.jpg";
import HR from "../../public/img/ServiceWoman.jpg";
import Image from 'next/image';
import TeamStyle from '../../styles/Team.module.css';

const Team = () => (
    <section className={"container mt-4 " + TeamStyle.Team} id="team" >
        <PageNav pageName={"the team"} />
        <h3 className="text-center my-3">Meet Our Amazing Team</h3>
        <div className="my-5 mx-auto row">
            <div className="col text-center d-flex justify-content-around">
                <div className={TeamStyle.Member}>
                    <Image src={CEO} width="100" height="100" className="img-fluid rounded-circle" />

                    <small className="d-block font-weight-600">Samuel Jaguda </small>
                    <small className="d-block text-dark">C.E.O</small>

                </div>
                <div className={TeamStyle.Member}>
                    <Image src={CTO} width="100" height="100" className="img-fluid rounded-circle" />
                    <small className="d-block font-weight-600">Samuel Jaguda </small>
                    <small className="d-block text-dark">C.E.O</small>
                </div>
                <div className={TeamStyle.Member}>
                    <Image src={HR} width="100" height="100" className="img-fluid rounded-circle" />
                    <small className="d-block font-weight-600">Samuel Jaguda </small>
                    <small className="d-block text-dark">C.E.O</small>
                </div>
            </div>
        </div>

    </section>
);

export default Team;