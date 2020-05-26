import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
function Image(){
    const image = [img1,img2,img3]

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    return image[getRandomInt(0,2)]
}
export default Image