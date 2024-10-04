
const images = [
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/148/original/image-117.jpg?1727509789',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/149/original/image-118.jpg?1727509790',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/148/original/image-117.jpg?1727509789',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/149/original/image-118.jpg?1727509790',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/148/original/image-117.jpg?1727509789',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/149/original/image-118.jpg?1727509790',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/148/original/image-117.jpg?1727509789',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/149/original/image-118.jpg?1727509790',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/148/original/image-117.jpg?1727509789',
    'https://s3.amazonaws.com/albumdraft-website-production/spreads/images/003/882/149/original/image-118.jpg?1727509790',
];

let currentPage = 0;
const imagesPerPage = 3;

function loadImages() {
    const mainImage = document.getElementById('main-image');
    const smallImage1 = document.getElementById('small-image-1');
    const smallImage2 = document.getElementById('small-image-2');

    const startIndex = currentPage * imagesPerPage;
    mainImage.src = images[startIndex];
    smallImage1.src = images[startIndex + 1] || '';
    smallImage2.src = images[startIndex + 2] || '';
}

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        loadImages();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage < images.length - 1 && currentPage < Math.floor(images.length / imagesPerPage)) {
        currentPage++;
        loadImages();
    }
});

loadImages();
