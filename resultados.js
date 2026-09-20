/* ===================================================================
   RESULTADOS OFICIAIS
   ===================================================================
   Um jogo por linha, nesta ordem:

       rodada,mandante,visitante,gols do mandante,gols do visitante

   Use as siglas de três letras:
   FLA PAL CAP BAH FLU CRU CAM CTB RBB SAN
   BOT SAO VIT COR MIR GRE VAS INT REM CHA

   Exemplos (apague o # da frente para valer):
   # 28,SAO,INT,1,0
   # 28,GRE,PAL,0,2
   # 21,CHA,VAS,1,1

   Regras:
   - A classificação de base já inclui tudo até a 27ª rodada (17/09).
     Lance aqui só o que for da 28ª em diante, mais Chapecoense x Vasco
     da 21ª, que ainda está sem data.
   - Mandante sempre primeiro, igual à tabela da CBF.
   - Linhas em branco e linhas com # são ignoradas.
   - Lançou um jogo aqui? Ele trava no app com o placar e todo mundo
     que abrir o link vê a mesma coisa.
   =================================================================== */

window.RESULTADOS = `
   28,MIR,BOT,2,0
   28,VAS,CTB,5,0
   28,SAO,INT,1,0
   28,GRE,PAL,0,0
   28,VIT,CRU,1,3
   28,COR,FLU,1,3
`;

/* Opcional: em vez de editar a lista acima, você pode publicar uma
   planilha do Google como CSV (Arquivo > Compartilhar > Publicar na web
   > valores separados por vírgula) e colar o link aqui. As colunas são
   as mesmas cinco, sem cabeçalho. Deixe vazio para usar a lista acima. */
window.PLANILHA_CSV = "";
