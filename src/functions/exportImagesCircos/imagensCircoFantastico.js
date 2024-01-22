const gallery = Object.values(import.meta.glob('/src/assets/images/circo_fantastico/*.jpg', { eager: true, as: 'url' }));
console.log(gallery[0])
const imagens = {
  circoFantastico: [],
};
gallery.forEach((img) =>(
  imagens.circoFantastico.push(img)
))

console.log(gallery)

export default imagens;