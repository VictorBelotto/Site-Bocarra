const gallery = Object.values(import.meta.glob('/src/assets/images/circo_dos_sonhos/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const imagens = {
  circoDosSonhos: [],
};
gallery.forEach((img) =>(
  imagens.circoDosSonhos.push(img)
))
export default imagens;