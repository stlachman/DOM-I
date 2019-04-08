const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
// Images
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent['cta']['img-src'];

const middleImage = document.getElementById('middle-img');
middleImage.src = siteContent['main-content']['middle-img-src'];

// Navigation Section
const navContent = siteContent['nav'];

const navigationItems = document.querySelectorAll('nav a');
navigationItems.forEach((navItem, index) => (navItem.textContent = navContent[`nav-item-${index + 1}`]));

// Update color to green
navigationItems.forEach((navItem) => (navItem.style.color = 'green'));

const nav = document.querySelector('nav');

const firstNavItem = document.createElement('a');
firstNavItem.textContent = 'Home';
firstNavItem.href = '#';

nav.prepend(firstNavItem);

const lastNavItem = document.createElement('a');
lastNavItem.text = 'Blog';
lastNavItem.href = '#';

nav.appendChild(lastNavItem);

// CTA Section
const ctaTitle = document.querySelector('.cta-text h1');
ctaTitle.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

// Main Content

// Top Content

const featuresH4 = document.querySelector('.top-content .text-content h4');
featuresH4.textContent = siteContent['main-content']['features-h4'];

const featuresContent = document.querySelector('.top-content .text-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.top-content .text-content:last-child h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];

const aboutContent = document.querySelector('.top-content .text-content:last-child p');
aboutContent.textContent = siteContent['main-content']['about-content'];

// Bottom Content

const firstColumnH4 = document.querySelector('.bottom-content .text-content h4');
firstColumnH4.textContent = siteContent['main-content']['services-h4'];

const firstColumnP = document.querySelector('.bottom-content .text-content p');
firstColumnP.textContent = siteContent['main-content']['services-content'];

const secondColumnH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
secondColumnH4.textContent = siteContent['main-content']['product-h4'];

const secondColumnP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
secondColumnP.textContent = siteContent['main-content']['product-content'];

const thirdColumnH4 = document.querySelector('.bottom-content .text-content:last-child h4');
thirdColumnH4.textContent = siteContent['main-content']['vision-h4'];

const thirdColumnP = document.querySelector('.bottom-content .text-content:last-child p');
thirdColumnP.textContent = siteContent['main-content']['vision-content'];

// Contact Info

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact p');
address.textContent = siteContent.contact.address;

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent.contact.phone;

const email = document.querySelector('.contact p:last-child');
email.textContent = siteContent.contact.email;

// Copyright

const copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;
