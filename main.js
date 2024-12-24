angular.module('travelBlogApp', [])
.controller('MainController', function($scope, $window) {
  $scope.scrolled = false;
  $scope.menuActive = false;

  angular.element($window).on('scroll', function() {
    $scope.scrolled = $window.pageYOffset > 50;
    $scope.$apply();
  });

  $scope.toggleMenu = function() {
    $scope.menuActive = !$scope.menuActive;
  };

  $scope.smoothScroll = function(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    $scope.menuActive = false;
  };

  $scope.featuredStories = [{
    title: "A Day in Dandeli",
    excerpt: "Unleash Adventure in Dandeli: River Rafting, Kayaking, Boating, and the Untamed Beauty of the Kali River.",
    image: "images/heyy.jpg"
  },
    {
      title: "Tranquil Tides: A Beach Odyssey in Gokarna",
      excerpt: "Uncover the rugged beauty and rich history of Scotland's breathtaking highlands.",
      image: "images/gokarnaa.jpg"
    },
    {
      title: "Lush Escapes: Honnavar’s Mangrove Wonderland",
      excerpt: "Experience the unique blend of tradition and technology in Japan's bustling capital.",
      image: "images/honna.jpg"
    }];

  $scope.photos = [{
    url: "images/sunsetgk.jpg",
    title: "Sunset in OM beach"
  },
    {
      url: "images/w1.jpg",
      title: "Rafting"
    },
    {
      url: "images/w2.jpg",
      title: "Rafting"
    },
    {
      url: "images/kayaking.jpg",
      title: "Kayaking"
    },
    {
      url: "images/aiet1.jpg",
      title: "Mirjan Fort"
    },
    {
      url: "images/w3.jpg",
      title: "Gokarna"
    },
    {
      url: "images/aiet3.jpg",
      title: "Mirjan Fort"
    },
    {
      url: "images/aiet4.jpg",
      title: "Kudle Beach"
    },
    {
      url: "images/aiet5.jpg",
      title: "Photo Time"
    },
    {
      url: "images/aiet6.jpg",
      title: "Chilling"
    },
    {
      url: "images/aiet10.jpg",
      title: "ECO Beach"
    },
    {
      url: "images/aiet9.jpg",
      title: "Fire Camp"
    }];

  $scope.itineraries = [{
    destination: "Adventure in Dandeli",
    description: "We started with thrilling river rafting, kayaking, and boating on the Kali River. Next, we visited the Crocodile Park before heading to the Supa Dam for a scenic finish to the day",
    duration: "Day 1",
    bestTime: "13-12-2024",
    image: "images/raff.jpg"
  },
    {
      destination: "Discovering Gokarna’s Beauty",
      description: "Our day began with the tranquil vibes of Om Beach, followed by the laid-back charm of Kudle Beach. We then ventured to the historic Mirjan Fort, where nature and history intertwined, leaving us with unforgettable memories of Gokarna’s coastal magic.",
      duration: "Day 2",
      bestTime: "14-12-2024",
      image: "images/sunmoon.jpg"
    },
    {
      destination: "Exploring Honnavar’s Natural Wonders",
      description: "We spent the day immersed in the serene beauty of Honnavar’s backwaters, followed by a peaceful boat ride through the lush mangrove forests. The day was filled with tranquility and the untouched beauty of nature, making it a perfect escape.",
      duration: "Day 3",
      bestTime: "15-12-2024",
      image: "images/boardwalk.jpg"
    }];

  $scope.email = '';
  $scope.subscribeNewsletter = function() {
    if ($scope.email) {
      alert('Thank you for subscribing with: ' + $scope.email);
      $scope.email = '';
    } else {
      alert('Please enter a valid email address.');
    }
  };
});

// Vanilla JS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  });

  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial-item');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.opacity = i === index ? '1': '0';
      testimonial.style.transform = i === index ? 'scale(1)': 'scale(0.9)';
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  showTestimonial(currentTestimonial);
  setInterval(nextTestimonial, 5000);

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-fade-in-up, .animate-scale-in, .animate-slide-in-left');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('aos-animate');
      }
    });
  }

  window.addEventListener('scroll',
    animateOnScroll);
  animateOnScroll();
});


