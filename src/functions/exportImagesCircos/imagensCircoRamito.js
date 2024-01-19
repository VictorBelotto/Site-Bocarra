async function carregarImagens() {
  const context = import.meta.glob('/src/assets/images/circo_ramito/*.jpg');
  return context;
}
const image = await carregarImagens();
const array = Object.values(image);

const imagens = {
  circoRamito: [],
};

array.forEach((img) => {
  imagens.circoRamito.push(
   img.name
  );
});
export default imagens;

