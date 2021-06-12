import hr from "./Images/4.png";
import graphics from "./Images/3.png"
import voice from "./Images/1.png";
import content from "./Images/2.png";
import marketing from "./Images/5.png";
import english from "./Images/6.png";

const DepartmentInfo = [
  {
    id: 1,
    heading: "Graphics Department",
    imageURL: graphics,
    direction: "horizontal",
    information: "Interns will be responsible for making social media graphics, posters, brochures, flyers etc. Interns will have to come up with creative content ideas for reels and IGTV videos "
  }, {
    id: 2,
    heading: "HR Department",
    imageURL: hr,
    direction: "vertical",
    information: "Plan out engagement activities for Interns (Informal connects / Games etc. ). Rewards and Recognition and Evaluation for interns "
  }, {
    id: 3,
    heading: "Voice Over",
    imageURL: voice,
    direction: "horizontal",
    information: "Editing the text which will be shared with you in Hindi or English. Recording audios in mp3 format is recommended. Work on audio editing and voice modulation."

  }, {
    id: 4,
    heading: "Marketing",
    imageURL: marketing,
    direction: "vertical",
    information: "Interns will be responsible for creating content and supporting the social media handles. Their role will be to bring traffic and engagement to our pages by creating relevant and creative content. "

  }, {
    id: 5,
    heading: "Spoken English",
    imageURL: english,
    direction: "horizontal",
    information: "Help the Visually Impaired develop spoken English skills. The candidate has to organize grooming sessions to develop interview skills and personality development."

  }, {
    id: 6,
    heading: "Content",
    imageURL: content,
    direction: "vertical",
    information: "Creating content in English and Hindi for the visually impaired to help them with their studies. Editing and creating data based on Various competitive exams such as UPSC, NDA, etc "
  }
];

export default DepartmentInfo;
