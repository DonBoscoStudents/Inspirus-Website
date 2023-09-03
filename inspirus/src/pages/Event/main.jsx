import "../../output.css";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar/app";
import MovingText from "../../components/movingText/app";
// let EventData = {
//   Inspirathon: {
//     name: "Inspirathon",
//     color: "c2",
//     description:
//       "Are you ready to unlock your creativity, innovation, and problem-solving skills? Welcome to Inspirus Hackathon, an electrifying and transformative event that brings together the brightest minds, tech enthusiasts, and visionaries from across the globe. Prepare to dive into a world of coding, collaboration, and ingenuity as we embark on a journey to shape the future through technology.",
//     phrases: ["Inspirathon"],
//     eligibility:
//       "Students from Undergraduate, Diploma and Higher Secondary Schools from professional non-professional institutions.",
//     rules: [
//       "Team members of each team should be from the same college (Interdepartmental teams are allowed).",
//       "Team members of each team can be from the 2021-2022 batch.",
//       "Teams can use any programming language or software of their choice.",
//     ],
//     judgingCriteria: "Complexity, Solution to problem, Execution, Optimisation, Presentation.",
//     eventDetails: "AKA: Hackathon📅 Date: 3rd & 4th November,2022🕒Time: 12pm onwards (24 hours)📍 Venue: Auditorium, 2nd FloorTeam Members: 2-3 per team",
//     prizes: {
//       "1st": "7000",
//       "2nd": "5000",
//       "3rd": "3000",
//     },
//     eventCoordinators: [
//       {
//         name: "Rhys Josmin",
//         role: "Event Coordinator",
//         whatsappNumber: 7588354003,
//         imageSource: "Rhys.jpg",
//       },
//     ],
//     registration: {
//       formLink: "Link",
//     },
//   },
// };


let EventData = {
  inspirathon: {
    name: 'Inspirathon',
    color:'c1',
    description:
      "Are you ready to unlock your creativity, innovation, and problem-solving skills? Welcome to Inspirus Hackathon, an electrifying and transformative event that brings together the brightest minds, tech enthusiasts, and visionaries from across the globe. Prepare to dive into a world of coding, collaboration, and ingenuity as we embark on a journey to shape the future through technology.",
    phrases: ["Inspirathon"],
    eligibility:
      "Students from Undergraduate, Diploma and Higher Secondary Schools from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "7000",
      "2nd": "5000",
      "3rd": "3000",
    },
    eventcoordinators: [
      {
        name: "Rhys Josmin",
        role: "Event Coordinator",
        whatsappNumber: 7588354003,
        imageSource: 'Rhys.jpg',
      },
      {
        name: "Sara Johnson",
        role: "Event Coordinator",
        whatsappNumber: 9876543210,
        imageSource: 'Sara.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  retrievalsages: {
    name: 'Retrieval Sages',
    color:'c3',
    description:
      "Join the Retrieval Sages in this quest for knowledge! Test your memory, recall abilities, and problem-solving skills in a series of challenging quizzes and puzzles. Are you up for the challenge?",
    phrases: ["Retrieval Sages"],
    eligibility:
      "Students from Undergraduate, Diploma and Higher Secondary Schools from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "3000",
      "2nd": "2000",
    },
    eventcoordinators: [
      {
        name: "Jonas Ferrao",
        role: "Event Coordinator",
        whatsappNumber: 8805513038,
        imageSource: 'Emma.jpg',
      },
      {
        name: "Anuj Gaude",
        role: "Event Coordinator",
        whatsappNumber: 7798665815,
        imageSource: 'James.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  codeplay: {
    name: 'CODEPLAY',
    color:'c5',
    description:
      "Calling all programmers and coding enthusiasts! CODEPLAY is your chance to showcase your coding skills and compete against the best. Solve challenging coding problems, demonstrate your algorithmic prowess, and win exciting prizes.",
    phrases: ["CODEPLAY"],
    eligibility:
      "Undergraduate and Diploma Students from all professional and non-professional institutions as well as students from Higher Secondary Schools. \nSkills required: \nCoders: Knowledge of C or C++. \nPlayers: Speed, Hand-eye coordination, Agility, Creativity, Promptness.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "3000",
      "2nd": "2000",
    },
    eventcoordinators: [
      {
        name: "Vishakha Durbhatkar",
        role: "Event Coordinator",
        whatsappNumber: 9850477369,
        imageSource: 'John.jpg',
      },
      {
        name: "Jay Rane",
        role: "Event Coordinator",
        whatsappNumber: 8208516322,
        imageSource: 'Emily.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  exquizite: {
    name: 'ExQuizite',
    color:'c6',
    description:
      "Put your general knowledge to the test with ExQuizite! Join us for a thrilling quiz competition that covers a wide range of topics. Challenge yourself and compete for fantastic prizes.",
    phrases: ["ExQuizite"],
    eligibility:
      "Undergraduate and Diploma Students from all professional and non-professional institutions. \nMaximum 2 Teams per Institution.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "3000",
      "2nd": "2000",
    },
    eventCoordinators: [
      {
        name: "Eshan sawant Desai",
        role: "Event Coordinator",
        whatsappNumber: 8329587975,
        imageSource: 'Sophia.jpg',
      },
      {
        name: "Eric Faleiro",
        role: "Event Coordinator",
        whatsappNumber: 8623069543,
        imageSource: 'David.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  codewars: {
    name: 'Code Wars',
    color:'c1',
    description:
      "Engage in an epic coding battle at <Code Wars>! Compete against fellow programmers in a series of coding challenges. Sharpen your skills, prove your mettle, and win amazing prizes.",
    phrases: ["<Code Wars>"],
    eligibility:
      "Undergraduate and Diploma Students from all professional and non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "3000",
      "2nd": "2000",
    },
    eventCoordinators: [
      {
        name: "Joseph Makkimane",
        role: "Event Coordinator",
        whatsappNumber: 7020487805,
        imageSource: 'Michael.jpg',
      },
      {
        name: "Pranav Kerkar",
        role: "Event Coordinator",
        whatsappNumber: 8857990312,
        imageSource: 'Ella.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  jigsawcoding: {
    name: 'Jigsaw Coding',
    color:'c2',
    description:
      "Solve the puzzle of coding at Jigsaw Coding! Test your problem-solving skills by piecing together complex code snippets. Are you up for the challenge?",
    phrases: ["Jigsaw Coding"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "3000",
      "2nd": "2000",
    },
    eventCoordinators: [
      {
        name: "Ruchi Bokade",
        role: "Event Coordinator",
        whatsappNumber: 8668445692,
        imageSource: 'Olivia.jpg',
      },
      {
        name: "Om Parab",
        role: "Event Coordinator",
        whatsappNumber: 7083423318,
        imageSource: 'Matthew.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  capturetheflag: {
    name: 'Capture The Flag',
    color:'c2',
    description:
      "Join the ultimate hacking challenge at Capture The Flag! Test your cybersecurity skills by attempting to capture the hidden flags in a virtual battlefield. prizes await the victors!",
    phrases: ["Capture The Flag"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "8000",
      "2nd": "5500",
      "3rd": "3500",
    },
    eventCoordinators: [
      {
        name: "Pranav Nayak",
        role: "Event Coordinator",
        whatsappNumber: 7720996607,
        imageSource: 'William.jpg',
      },
      {
        name: "Sam Cardozo",
        role: "Event Coordinator",
        whatsappNumber: 8983056865,
        imageSource: 'Ava.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  mindgames: {
    name: 'MindGames(Treasure Hunt)',
    color:'c3',
    description:
      "A frantic affair, this event has all the best parts of a quiz combined with the manic frenzy of a treasure hunt. Participants will have to answer questions and solve riddles and they'll have to run around and use all their skills. Are you ready to outsmart the competition?",
    phrases: ["MindGames"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "3000",
      "2nd": "2000",
      "3rd": "1000",
    },
    eventCoordinators: [
      {
        name: "Christie Fernandes",
        role: "Event Coordinator",
        whatsappNumber: 2000000000,
        imageSource: 'Ella.jpg',
      },
      {
        name: "Preetam Bhat",
        role: "Event Coordinator",
        whatsappNumber: 9881114472,
        imageSource: 'Liam.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  leisurelounge: {
    name: 'Leisure Lounge',
    color:'c6',
    description:
      "Join us for a day filled with fun and excitement! Our internal activities include team-building exercises, games, and entertainment for all participants. Get ready to have a blast!",
    phrases: ["Leisure Lounge"],
    eligibility:
      "Open to all.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {},
    eventCoordinators: [
      {
        name: "Glory D'Cruz",
        role: "Event Coordinator",
        whatsappNumber: 2222222222,
        imageSource: 'Sophie.jpg',
      },
      {
        name: "Daniel Smith",//dk
        role: "Event Coordinator",
        whatsappNumber: 1111111111,
        imageSource: 'Daniel.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  reelitfeelit: {
    name: 'Reel it Feel it(Online)',
    color:'c4',
    description:
      "Lights, camera, action! Showcase your creativity and filmmaking skills in Reel Ad making. Create captivating advertisements and win accolades for your cinematic brilliance.",
    phrases: ["Reel it Feel it"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "5000",
      "2nd": "3000",
      "3rd": "2000",
    },
    eventCoordinators: [
      {
        name: "Warren Rodrigues",
        role: "Event Coordinator",
        whatsappNumber: 9518572503,
        imageSource: 'Sophie.jpg',
      },
      {
        name: "Faizan A",
        role: "Event Coordinator",
        whatsappNumber: 8390109186,
        imageSource: 'Daniel.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  framed: {
    name: 'Framed',
    color:'c4',
    description:
      "Capture the world through your lens in Framed! Participate in our photography competition and showcase your talent. Stunning prizes await the best photographers.",
    phrases: ["Framed"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "4000",
      "2nd": "2500",
      "3rd": "1500",
    },
    eventCoordinators: [
      {
        name: "Ved Kerkar",
        role: "Event Coordinator",
        whatsappNumber: 8767388109,
        imageSource: 'Sophie.jpg',
      },
      {
        name: "Coordi 2",
        role: "Event Coordinator",
        whatsappNumber: 1111111111,
        imageSource: 'Daniel.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  incarnate: {
    name: 'Incarnate!',
    color:'c2',
    description:
      "Unleash your inner actor in Incarnate! Showcase your acting skills and perform dramatic monologues, scenes, or skits. Be the star of the show and win accolades.",
    phrases: ["Incarnate!"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "3000",
      "2nd": "2000",
      "3rd": "1000",
    },
    eventCoordinators: [
      {
        name: "Elton costa",
        role: "Event Coordinator",
        whatsappNumber: 9604344945,
        imageSource: 'Megan.jpg',
      },
      {
        name: "Melrich Moraes",
        role: "Event Coordinator",
        whatsappNumber: 8208417670,
        imageSource: 'Sophie.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  rubixcube: {
    name: 'Rubix Cube',
    color:'c1',
    description:
      "Test your puzzle-solving skills with the Rubik's Cube! Compete against fellow cubers in this thrilling challenge. Solve the cube in record time and claim your victory.",
    phrases: ["Rubix Cube"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "1500",
      "2nd": "1000",
      "3rd": "500",
    },
    eventCoordinators: [
      {
        name: "Anish Naik",
        role: "Event Coordinator",
        whatsappNumber: 7777777777,
        imageSource: 'David.jpg',
      },
      {
        name: "coordi2",
        role: "Event Coordinator",
        whatsappNumber: 2222222222,
        imageSource: 'Sophie.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
  memes: {
    name: 'Memes',
    color:'c6',
    description:
      "Test your puzzle-solving skills with the Rubik's Cube! Compete against fellow cubers in this thrilling challenge. Solve the cube in record time and claim your victory.",
    phrases: ["Rubix Cube"],
    eligibility:
      "Students from Higher Secondary, Undergraduate and Diploma from professional non-professional institutions.",
    rules: [],
    judgingCriteria: "",
    eventDetails: "",
    prizes: {
      "1st": "1500",
      "2nd": "1000",
      "3rd": "500",
    },
    eventCoordinators: [
      {
        name: "Anish Naik",
        role: "Event Coordinator",
        whatsappNumber: 7777777777,
        imageSource: 'David.jpg',
      },
      {
        name: "coordi2",
        role: "Event Coordinator",
        whatsappNumber: 2222222222,
        imageSource: 'Sophie.jpg',
      },
    ],
    registration: {
      formLink: "Link",
    },
  },
};


function EventPage(Params) {
  Params = useParams();
  console.log(Params)
  let CurrentEventDetails = EventData[Params['eventName'].toLowerCase()];
  console.log(CurrentEventDetails);
  return (
    <div className={`text-textColor`} style={{ background: `var(--${CurrentEventDetails['color']})` }} >
      <NavBar />
      <div className="p-4 mt-6 h-screen">
        <h1 className="font-black text-5xl font-IBMPlexSerif">
          { CurrentEventDetails['name'] }
        </h1>
        <p className="w-[60%] font-Poppins mt-2 ">
          {CurrentEventDetails.description}
        </p>
      </div>
      <MovingText text={CurrentEventDetails["name"].toUpperCase()} />
      <div>

     
      <div id="mainDetails">
        <h1>Eligibility</h1>
        <p>{CurrentEventDetails["eligibility"]}</p>
        <br />

        <h1>Rules</h1>
        <p>
          {CurrentEventDetails.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </p>
        <br />

        <h1>Judging Criteria</h1>
        <p>{CurrentEventDetails["judgingCriteria"]}</p>
      </div>

      <div id="sideDetails">
        <h1>Event Details</h1>
        <p>{CurrentEventDetails['eventDetails']}</p>
      </div>
      </div>
    </div>
  );
}

export default EventPage;
