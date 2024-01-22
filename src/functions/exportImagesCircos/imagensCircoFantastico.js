const gallery = Object.values(import.meta.glob('/src/assets/images/circo_fantastico/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const imagens = {
  circoFantastico: [],
};
gallery.forEach((img) =>(
  imagens.circoFantastico.push(img)
))
export default imagens;