import React from 'react'
import styles from './Servicos.module.css'

const Servicos = () => {
  return (
    <div className={styles.container}>
    <h2>Nossas Principais Atividades e Serviços</h2>
    <div className={styles.listaAtividades}>
      {/* Atividade 1 */}
      <div className={styles.atividade}>
        <h3>Desenvolvimento e Confecção de Estruturas em Membrana Têxtil</h3>
        <p>
          Realizamos o desenvolvimento e confecção de estruturas em membrana têxtil de grande, médio e pequeno porte. Utilizamos software avançado para modelagem, solda eletrônica de alta frequência, e confecção da estrutura metálica.
        </p>
      </div>

      {/* Atividade 2 */}
      <div className={styles.atividade}>
        <h3>Confecção de Tensoestruturas para Circos</h3>
        <p>
          Somos especialistas na confecção de tensoestruturas para circos em todo o Brasil. Nossas tensoestruturas oferecem durabilidade, resistência e design inovador.
        </p>
      </div>

      {/* Atividade 3 */}
      <div className={styles.atividade}>
        <h3>Confecção de Tendas de Todos os Modelos</h3>
        <p>
          Produzimos tendas de diversos modelos, incluindo piramidal, chapéu de bruxa, tenda aranha, estrela, caravela, etc., ideais para eventos de todos os tipos.
        </p>
      </div>

      {/* Atividade 4 */}
      <div className={styles.atividade}>
        <h3>Confecção de Galpões Cobertos em Lona</h3>
        <p>
          Realizamos a confecção de galpões cobertos em lona, proporcionando soluções versáteis para diferentes necessidades de armazenamento ou eventos.
        </p>
      </div>

      {/* Atividade 5 */}
      <div className={styles.atividade}>
        <h3>Desenvolvimento de Coberturas Personalizadas</h3>
        <p>
          Desenvolvemos coberturas personalizadas exclusivas, adaptadas às necessidades específicas de cada cliente. Nossa equipe realiza modelagem 3D no software SketchUp para garantir precisão e inovação.
        </p>
      </div>

      {/* Outras Atividades/Serviços */}
      {/* ... Adicione mais atividades e serviços conforme necessário */}
    </div>
  </div>  )
}

export default Servicos