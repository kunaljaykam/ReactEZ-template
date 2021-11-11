/* Change this file to update/change */

// To change DrChuck colors globally go to the  _globalColor.scss file




// change logo
const logo = {
  img: require("./assets/images/CHARLES-SEVERANCE.svg")
}



// info section 


// info 
const info = {
  name: "Charles Severance", 
  nickname: "(Dr. Chuck)", 
  bio: "Professor type dude interested in open source educational technology - Sakai, Apereo, and Tsugi.",
  image: require("./assets/images/drchuck.jpeg")
};

  // to add more sub-info, add more lines to the array

  const subInfo = [
    // add more sub-info here
    {
      title: "Teaching:",
      urls: [
        {
          name: "University Of Michigan",
          url: "https://www.si.umich.edu/people/charles-severance"
        }
      ]
    },
    {
      title: "Software:",
      urls: [
        {
          name: "The Sakai Collaboration and Learning Environment,", // use comma to add more name and url, it will look better
          url: "https://www.sakailms.org/"
        },
        {
          name: "Tsugi: A framework for learning tools,",
          url: "https://www.tsugi.org/"
        },
        {
          name: "IMS Learning Tools Interoperability",
          url: "http://developers.imsglobal.org/"
        }
      ]
    },
    {
      title: "Podcast:",
      urls: [
        {
          name: "Learner Privacy Org",
          url: "https://www.umich.edu/"
        }
      ]
    },
    {
      title: "Connect with Dr. Chuck on:",
      urls: [
        {
          name: "Twitter,",
          url: "https://twitter.com/drchuck/"
        },
        {
          name: "LinkedIn,",
          url: "https://www.linkedin.com/in/chalesseverance"
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/charles.severance"
        }
      ]
    },
    {
      title: "Dr Chuck's:",
      urls: [
        {
          name: "Resume and Bio,",
          url: "https://www.dr-chuck.com/dr-chuck/resume/index.htm"
        },
        {
          name: "Papers,",
          url: "http://afs.dr-chuck.com/papers/"
        },
        {
          name: "Github,",
          url: "https://gihub.com/csev"
        },
        {
          name: "Blog,",
          url: "https://www.dr-chuck.com/csev-blog/"
        },
        {
          name: "YouTube,",
          url: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw"
        },
        {
          name: "Talks,",
          url: "https://www.coursera.org/instructor/profile/csev"
        },
        {
          name: "Coursera Page,",
          url: "https://www.coursera.org/instructor/profile/csev"
        },
        {
          name: "Amazon Author Page,",
          url: "https://www.coursera.org/instructor/profile/csev"
        },
        {
          name: "Books,",
          url: "https://www.coursera.org/instructor/profile/csev"
        }
      ]
    },
    {
      title: "Books:",
      urls: [
        {
          name: "Python For Everybody: Exploring Data in Python 3,",
          url: "https://www.py4e.com/book"
        },
        {
          name: "Sakai: Building an Open Source Community,",
          url: "https://www.py4e.com/book"
        },
        {
          name: "Raspberry Pi (21st Century Skills Innovation Library),",
          url: "https://www.py4e.com/book"
        },
        {
          name: "Using Google App Engine",
          url: ""
        },
        {
          name: "High Performance Computing (O'Reilly 1998, Connexions 2010)",

          url: ""
        }
      ]
    },
    {
      title: "Outside work, I enjoy:",
      urls: [
        {
          name: "Racing",
          url: "https://www.umich.edu/",
        },
        {
          name: "Singing",
          url: ""
        }
      ]
    }
  ];
    
    
  




// ccontents section

const contents = {
  title: "Free Courses & Educational Material",

  content: [
    {
      title: "Python For Everybody - Full University Python Course",
      thumbnail: require("./assets/thumbnails/python-thumbnail.webp"),
      videoLink: "https://youtu.be/8DvywoWv6fI",
      websiteLink: "https://www.py4e.com/",
      description:
        "This Python 3 tutorial course aims to teach everyone the basics of programming computers using Python. The course has no pre-requisites and avoids all but the simplest mathematics. "
    },
    {
      title: "Django For Everybody - Full Python University Course",
      thumbnail: require("./assets/thumbnails/django-thumbnail.webp"),
      videoLink: "https://youtu.be/o0XbHvKxw7Y",
      websiteLink: "https://www.dj4e.com/",
      description:
        "This Django tutorial aims to teach everyone the Python Django web development framework."
    },
    {
      title:
        "Web Applications for Everybody Course - Dr. Chuck Teaches HTML, PHP, SQL, CSS, JavaScript, and more!",
      thumbnail: require("./assets/thumbnails/web-app-thumbnail.webp"),
      videoLink: "https://youtu.be/xr6uZDRTna0",
      websiteLink: "https://www.wa4e.com/",
      description:
        "This beginner's course is a complete introduction to web application development. Learn how to build dynamic database-backed web sites. Dr. Chuck will teach you how to use HTML, CSS, JavaScript, PHP, MySQL, jQuery, and Handlebars to build web and database applications."
    }
  ]
};




// const twitterDetails = {
//   userName: "drchuck", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

export {
  logo,
  info,
  subInfo,
  contents,
};
