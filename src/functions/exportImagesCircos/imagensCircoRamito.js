const gallery = Object.values(import.meta.glob('/src/assets/images/circo_ramito/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const imagens = {
  circoRamito: [],
};
gallery.forEach((img) =>(
  imagens.circoRamito.push(img)
))
export default imagens;