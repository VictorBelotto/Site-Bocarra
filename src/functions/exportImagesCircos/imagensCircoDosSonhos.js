async function carregarImagens() {
  const context = import.meta.glob('/src/assets/images/circo_dos_sonhos/*.jpg');
  return context;
}
const image = await carregarImagens();
const array = Object.values(image);
const imagens = {
  circoDosSonhos: [],
};
array.forEach((img) => {
  imagens.circoDosSonhos.push(
   img.name
  );
});
export default imagens;
