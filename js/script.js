var mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var app = new Vue({
  el: '#app',
  data: {
    logoUrl: 'img/logo-light.png',
    pageMenu: [
      {
        name: 'Home',
        url: '#'
      },
      {
        name: 'Courses',
        url: '#'
      },
      {
        name: 'Instructors',
        url: '#'
      },
      {
        name: 'Events',
        url: '#'
      },
      {
        name: 'Pages',
        url: '#'
      },
      {
        name: 'Elements',
        url: '#'
      },
      {
        icon: 'search',
        url: '#'
      },
      {
        icon: 'shopping-bag',
        url: '#'
      },
      {
        icon: 'bars',
        url: '#'
      }
    ],
    cartItem: 0,
    sectorMenu:[
      {
        subject: 'Languages',
        src: 1
      },
      {
        subject: 'Software',
        src: 2
      },
      {
        subject: 'Business',
        src: 3
      },
      {
        subject: 'Chemistry',
        src: 4
      },
      {
        subject: 'Science',
        src: 5
      },
      {
        subject: 'DIY&Craft',
        src: 6
      }
    ],
    counterJumbotron: 0,
    jumbotron:[
      {
        src: 'img/h5-slide-1-background.jpg',
        h1: 'Internet of things',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        src: 'img/h5-slide-2-background.jpg',
        h1: 'Machine learning',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        src: 'img/h5-slide-3-background.jpg',
        h1: 'Contemporary ideas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ],
    counterReview: 0,
    reviews:[
      {
        src: 'img/instructor-img-1.jpg',
        content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
        name: 'Joan Collins',
        role: 'Student'
      },
      {
        src: 'img/instructor-img-2.jpg',
        content: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        name: 'Paul McTrevor',
        role: 'Ex-student'
      },
      {
        src: 'img/instructor-img-3.jpg',
        content: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
        name: 'Anastacia Smith',
        role: 'Partner'
      }
    ],
    counterQea: 0,
    qea:[
      {
        question: 'What We Do',
        answer: 'Learning Possibilities',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        list: ['We enrich lives through learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
        src: 'img/h12-tabs-icon-1.png'
      },
      {
        question: 'Degree Programme',
        answer: 'Our Students Are The Best',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: ['Maximizing potential through individual attention.', 'We enrich lives through learning.', 'People teach. People learn. This is where they connect.', 'The trusted name for specialized training.'],
        src: 'img/h12-tabs-icon-2.png'
      },
      {
        question: 'Career Achievements',
        answer: 'Works After School',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        list: ['We enrich lives through learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
        src: 'img/h12-tabs-icon-3.png'
      },
      {
        question: 'Personal Management',
        answer: 'Your Business',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: ['Maximizing potential through individual attention.', 'We enrich lives through learning.', 'People teach. People learn. This is where they connect.', 'The trusted name for specialized training.'],
        src: 'img/h12-tabs-icon-4.png'
      },
      {
        question: 'Steps To Success',
        answer: 'Study, Hard Work and Success',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        list: ['We enrich lives through learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
        src: 'img/h12-tabs-icon-5.png'
      },
      {
        question: 'Knowledge Transfer',
        answer: 'Our Mission',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: ['Maximizing potential through individual attention.', 'We enrich lives through learning.', 'People teach. People learn. This is where they connect.', 'The trusted name for specialized training.'],
        src: 'img/h12-tabs-icon-6.png'
      }
    ],
    counterCourses: 0,
    courses:[
      'img/landing-carousel-gallery-img-1.jpg',
      'img/landing-carousel-gallery-img-2.jpg',
      'img/landing-carousel-gallery-img-3.jpg',
      'img/landing-carousel-gallery-img-4.jpg',
      'img/landing-carousel-gallery-img-5.jpg',
      'img/landing-carousel-gallery-img-7.jpg',
      'img/landing-carousel-gallery-img-2.jpg',
      'img/landing-carousel-gallery-img-3.jpg',
      'img/landing-carousel-gallery-img-4.jpg'
    ],
    head:[
      {
        title: 'Save up to 40% by paying weekly',
      },
      {
        src: 'img/h5-custom-icon-7.png',
        title: 'Standard',
        price: '$ 12',
      },
      {
        src: 'img/h5-custom-icon-8.png',
        title: 'Professional',
        price: '$ 59',
      },
      {
        src: 'img/h5-custom-icon-9.png',
        title: 'Advanced',
        price: '$ 88',
      }
    ],
    rows: [
      {
        offer: 'Number of Courses',
        std: '2',
        pro: '4',
        adv: '6'
      },
      {
        offer: 'Time',
        std: '15 Days',
        pro: '30 Days',
        adv: '30 Days'
      },
      {
        offer: 'Web Designing',
        std: 'y',
        pro: 'y',
        adv: 'y'
      },
      {
        offer: 'Human-Centered Design',
        std: 'y',
        pro: 'y',
        adv: 'y'
      },
      {
        offer: 'Basic Marketing',
        std: 'x',
        pro: 'y',
        adv: 'y'
      },
      {
        offer: 'Python for Everybody',
        std: 'x',
        pro: 'y',
        adv: 'y'
      },
      {
        offer: 'Android Developer',
        std: 'x',
        pro: 'x',
        adv: 'y'
      },
      {
        offer: 'Business English',
        std: 'x',
        pro: 'x',
        adv: 'y'
      },
      {
        offer: '',
        std: 'btn',
        pro: 'btn',
        adv: 'btn'
      }
    ],
    client:[
      'img/h5-client-1.png',
      'img/h5-client-2.png',
      'img/h5-client-3.png',
      'img/h5-client-4.png'
    ]
  },
  computed: {
    "columns": function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
  },
  methods: {
    changeJumbotron(index){
      this.counterJumbotron = index;
    },
    changeReview(index){
      this.counterReview = index;
    },
    changeQuestion(index){
      this.counterQea = index;
    },
    changeCourses(index){
      this.counterCourses = index
    }
  }
});