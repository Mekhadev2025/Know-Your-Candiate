import React from "react";
import {Link} from "react-router-dom"
import "../Home/Home.css";
import flag from "../../assets/flag.png";
import ppl from "../../assets/ppl.png";
import Map from "../../components/maps/Map";
const Home = () => {
  return (
    <main>
      <section>
        <Map />


        <Link to="/district?district=trivandrum" value="trivandrum">Trivandrum
        </Link>

        <Link to="/district?district=kollam" value="kollam">Kollam
        </Link>


      </section>
      <section className="about">
        <h1 className="header">Choose your candidate</h1>
        <div className="container1">
          <p className="text text1">
            In a democratic republic like India, the power lies with the people,
            and it is their responsibility to elect leaders who are qualified,
            competent, and committed to serving the nation. The Lok Sabha or the
            Lower house of the Parliament is a crucial institution of the Indian
            democracy, and the selection of its members should be done with
            great care and attention to ensure that the best possible candidates
            are chosen to represent the diverse voices of the Indian people.
            <br></br>
            <br />
            The Lok Sabha or the House of Commons is the lower house of the
            Indian Parliament, consisting of 543 members who are directly
            elected by the people of India. The maximum sanctioned number is
            550. The importance of choosing suitable candidates for the Lok
            Sabha cannot be overstated, as these individuals are responsible for
            representing the interests of their constituents and making
            important decisions that affect the country as a whole.
            <br></br>
            <br />
            Candidates must possess a thorough understanding of the issues
            facing the nation and have a vision for how to address them. When
            voters elect suitable candidates to the Lok Sabha, they are ensuring
            that their voices are heard in the highest levels of government.
            Suitable candidates can bring about positive change in their
            constituencies by advocating for policies that promote social and
            economic progress, protecting the rights of minorities, and
            providing essential services to the people.
          </p>
          <img src={flag} className="image img1"></img>
        </div>


        
        <div className="container2">
          <img className="image img2" src={ppl}></img>
          <p className="text text2">
            Currently citizens have no option for nominating a candidate of
            their choice. Choose your candidate revolutionizes the nomination
            process by leveraging the visual appeal and user-friendly nature of
            an interactive map. Seamlessly navigate through your local
            constituencies, zooming in and out to explore the areas that matter
            most to you. As you delve into each constituency, discover a vibrant
            array of markers waiting to be filled with the candidates of your
            choice.
            <br></br>
            <br />
            Our intuitive platform enables you to nominate candidates with just
            a few clicks. Simply select a marker within your desired
            constituency, and a user-friendly nomination form pops up. Enter the
            candidate's details, such as their name, background, and
            qualifications, highlighting what makes them the ideal
            representative for that specific area.
            <br></br>
            <br />
            But we don't stop there. Choose your candidate fosters community
            engagement by promoting collaboration and discussion. Connect with
            fellow citizens within your constituencies, share insights, and
            advocate for your favorite candidates. Spark meaningful
            conversations, endorse nominees, and collectively shape the future
            of your local political landscape. With our secure and reliable
            infrastructure, you can trust that your nominations are handled with
            the utmost confidentiality and integrity. Each submission undergoes
            a thorough verification process to ensure the credibility and
            eligibility of the nominated candidates. We prioritize transparency
            and fairness to build trust within the democratic process.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
