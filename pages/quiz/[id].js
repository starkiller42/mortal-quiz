/* eslint-disable linebreak-style */
import React from 'react';

export default function QuizDaGaleraPage(props) {
  return (
    <div>
      Desafio da proxima aula junto com as animações
      <pre style={{color: 'black';}}>
        {JSON.stringify(props, null, 4)}
      </pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pear os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.log(err);
    });

  console.log('dbExterno', dbExterno);
  console.log('Infos que o Next da para nós', context.query.id);
  return {
    props: {
      dbExterno,
    },
  };
}
