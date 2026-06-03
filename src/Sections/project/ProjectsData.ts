import perpusMobile from "../../assets/project1-mobile.png";

import cashierMobile from "../../assets/project2-mobile.png";

import footballMobile from "../../assets/project3-mobile.png";


type Project = {
  id: number;
  imgMobile: string;

  alt: string;
  name: string;
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
};

export const projects: Project[] = [
  {
    id: 1,
    imgMobile: perpusMobile,
    
    name: "Digital Library Management System",
    alt: "Digital Library Management System built with React, TypeScript, Node.js, and MongoDB",
    description:
      "A modern digital library platform designed to streamline book cataloging, member management, and borrowing transactions through a centralized and user-friendly dashboard.",
    situation:
      "As library collections expand, managing inventory, tracking borrowed books, and handling member registrations manually through spreadsheets or paper logs becomes inefficient. Librarians often struggle with lost records, overdue tracking, and a lack of real-time visibility into book availability.",
    task: "Design and develop a scalable digital library management system that enables librarians and members to catalog books, manage borrowing/return transactions, and monitor collection status in real time.",
    action:
      "Built a responsive front-end using React and TypeScript and developed RESTful APIs with Node.js and Express. Integrated MongoDB for data persistence and implemented features such as book cataloging with metadata, member registration, borrowing and return tracking, due date monitoring, fine calculation, and multi-role user authentication (admin/librarian/member).",
    result:
      "Delivered a streamlined library management tool that eliminates manual record-keeping, provides real-time book availability status, automates overdue notifications, and offers members a clear, structured way to browse and borrow books online.",
  },
  {
    id: 2,
    imgMobile: cashierMobile,

    name: "Accounting & Cashier App",

    alt: "Accounting & Cashier App dashboard showing sales and inventory",
    description:
      "A business management application that combines cashier operations, inventory tracking, and financial reporting into a single platform for small and medium-sized businesses.",
    situation:
      "Many small businesses rely on manual transaction records and disconnected systems, making it difficult to track inventory, monitor sales performance, and maintain accurate financial data.",
    task: "Develop an integrated cashier and accounting solution that streamlines daily transactions while providing real-time operational and financial insights.",
    action:
      "Designed and developed modules for point-of-sale transactions, inventory management, expense tracking, customer records, and financial reporting. Built backend services to automate stock updates and ensure data consistency across business operations.",
    result:
      "Provided business owners with a centralized platform for managing sales, monitoring inventory levels, and generating financial reports more efficiently while reducing administrative overhead.",
  },
  {
    id: 3,
    imgMobile: footballMobile,

    name: "Football Analytics Platform",

    alt: "Football Analytics Platform showing player tracking and movement heatmap",
    description:
      "A computer vision-powered analytics platform that processes football match footage to generate player tracking data, movement analysis, and performance insights.",
    situation:
      "Football analysis often requires extensive manual review of match footage, making it time-consuming to collect player movement data and identify performance trends.",
    task: "Build an analytics platform capable of automatically detecting players from video footage and presenting actionable insights through an interactive dashboard.",
    action:
      "Trained object detection models using YOLO, processed video streams with OpenCV, and developed backend services with FastAPI. Built a visualization dashboard to display player tracking information, movement patterns, and match statistics in an accessible format.",
    result:
      "Successfully automated key parts of the analysis workflow, reducing manual effort and creating a foundation for data-driven decision-making based on football match footage.",
  },
];
