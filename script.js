new Vue({
  el: "#myApp",
  data: {
    technologies: {
      columnOne: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          title: "HTML5",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
          title: "CSS3",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
          title: "BootStrap",
        },
        {
          url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          title: "Tailwind CSS",
        },
      ],
      columnTwo: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          title: "Javascript",
        },
        {
          url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vue-js-icon.svg",
          title: "Vuejs",
        },
        {
          url: "https://cdn.worldvectorlogo.com/logos/vuetify.svg",
          title: "Vuetify",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg",
          title: "NuxtJs",
        },
      ],
      columnThree: [
        {
          url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          title: "React",
        },
        {
          url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
          title: "Redux",
        },
        {
          url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
          title: "NodeJs",
        },
        {
          url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
          title: "Express",
        },
      ],
      columnFour: [
        {
          url: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          title: "Laravel",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
          title: "MySql",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
          title: "MongoDB",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
          title: "Git",
        },
      ],
    },
    project_data: {
      first: [
        {
          title: "Scan2Ride",
          url: "http://www.scan2ride.nl",
          description:
            "Scan2Ride is web application for registering visitor for a test ride and track them. Jaarbeurs (admin) add test ride event and list of exhibitors take a part of it. They add bike and motor bikes for a event. visitor register for event and take a test ride by scanning QA code. Exhibitor can track how many user participant in the event.",
          technologies: "Laravel,Jquery,MySQL",
        },
        {
          title: "Ecommernce Platform",
          description:
            "Ecommernce application deliver the products in 5 countries. Sending gifts with greeting card and addon products by user to their love one.",
          technologies:
            "<b>Frontend :</b> Vuejs,Vuetiy,Nuxt Js<br><b>Backend:</b> Laravel,Mongodb",
        },
        {
          title: "Sauna Tool",
          description:
            "Sauna tool is booking the appointment for sauna list of services. Appointments are booked based by products, package and coupon. Application add products,package and coupon and also allocate the slot time for appointment.",
          technologies: "Laravel,jQuery,MySQL",
        },
      ],
      second: [
        {
          title: "Perluta",
          description:
            "Perluta web portal is used for machenical fields where user inspects the machine each parts and manage its records in the portal. There are projects that know as machines has assests (n-level) and has documents (docuemntes related inspection of assests)",
          technologies:
            "<b>Frontend:</b> Vuejs.Vuetify <b>Backend:</b>Laravel,MySQL,Mongodb",
        },
        {
          title: "Perscriptum",
          description:
            "The perscriptum is candidate examination portal. Here, Candidate register himself and conduct the exam and automated generate the certificate based on the result of exam",
          technologies:
            "<b>Frontend:</b> Vuejs.Vuetify <b>Backend:</b>Laravel,MySQL,Mongodb",
        },
        {
          title: "Superrecods",
          url: "https://www.superrecords.com.au/",
          description:
            "Superrecords is web portal which use for manage day to day workflow of accounting firm. Portal is act like bridge for clients and firm. Here, There are serveral practical based on austrelia register in the portal and they add the works by adding jobs and tasks and accountant pick up the jobs and task and ask the query for specific job/task if it using portal.",
          technologies: "PHP,Yii Framework, Jquery, MySQL",
        },
      ],
    },
    year: new Date().getFullYear(),
  },
});
