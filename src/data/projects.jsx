import ExamHackImage from "../assets/Project_Images/ExamHack.png";
import LetsCallImage from "../assets/Project_Images/LetsCall.png";
import KaravaliAgroServiceImage from "../assets/Project_Images/KaravaliAgroService.png";

export const projects = [
  {
    image: ExamHackImage,
    title: "ExamHack",
    description: (
      <>Platform to simplify exam planning and accessing resources made easy.</>
    ),
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/apprajwal2003/ExamHack",
    liveLink: "https://exam-hack.vercel.app/",
  },
  {
    image: LetsCallImage,
    title: "LetsCall",
    description: (
      <>
        Video calling app using WebRTC and Socket.IO for real-time
        communication. Also includes a chat feature for seamless messaging.
        <br />
        <span className="text-yellow-300 text-sm max-md:text-xs">
          PS: I used free hosting so it might take a minute to load backend
          server for signing in.
        </span>
      </>
    ),
    technologies: ["React.js", "Node.js", "Socket.IO"],
    githubLink: "https://github.com/apprajwal2003/LetsCall",
    liveLink: "https://lets-call.onrender.com/",
  },
  {
    image: KaravaliAgroServiceImage,
    title: "KaravaliAgroService",
    description: (
      <>
        E-commerce platform for agricultural products, connecting farmers with
        local suppliers and services.
        <br />
      </>
    ),
    technologies: [
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "AWS S3 Bucket",
    ],
    githubLink: "https://github.com/apprajwal2003/Karavali-Agro-Service",
    liveLink: "",
  },
];
